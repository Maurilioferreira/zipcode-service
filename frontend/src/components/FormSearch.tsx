import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { countries } from "./countriesList";

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
    }
  }
`;

function SearchZip(country: string, zip: string) {
  const { loading, error, data } = useQuery(SEARCH_ZIP, {
    variables: {
      country,
      zip
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data);
  return null;
  // return (
  //   <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  // );
}

function RenderOptions(countries: Array<country>) {
  return countries.map((country: country, index: number) => {
    return (
      <option key={index} value={country.value}>
        {country.value}
      </option>
    );
  });
}


function FormSearch() {
  const [validated, setValidated] = useState(false);
  // const { loading, error, data, refetch } = useQuery(SEARCH_ZIP, {
  //   variables: {
  //     country: 'US',
  //     zip: '0303'
  //   },
  // });
 

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
    console.log('form => ', zip);
    console.log('form => ', country);
    // SearchZip(country, zip);
    // refetch({country, zip })
   
    // if (loading) return null;
    // if (error) return `Error! ${error}`;
    // console.log(data);
  };

  return (
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
  );
}

export default FormSearch;