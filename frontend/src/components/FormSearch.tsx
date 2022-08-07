import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { countries } from "./countriesList";
import SearchResult from './SearchResult'

interface country {
  value: string;
  label: string;
}

const SEARCH_ZIP = gql`
  query ($country: String, $zip: String) {
    searchZippopotam(country: $country, zip: $zip) {
      country
      countryAbbreviation
      created
      id
      places
      zip
    }
  }
`;

function RenderOptions(countries: Array<country>) {
  return countries.map((country: country, index: number) => {
    return (
      <option key={index} value={country.value}>
        {country.value}
      </option>
    );
  });
}

function FormSearch(props: any): JSX.Element {
  const { refetchAllData } = props;
  const [validated, setValidated] = useState(false);
  const [searchZip, { loading, error, data }] = useLazyQuery(SEARCH_ZIP);

  const resultProps = {
    loading, error, data
  }
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    const zip = event.target.zip.value;
    const country = event.target.country.value;
    if(country && zip){
      searchZip({ variables: { country, zip } }).then(() => refetchAllData());
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="zip">
          <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="US">US</option>
              {RenderOptions(countries)}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Button type="submit" style={{marginTop: '32px'}}>Search</Button>
          </Form.Group>
        </Row>    
      </Form>
      <SearchResult {...resultProps} />
    </>
  );

}

export default FormSearch;