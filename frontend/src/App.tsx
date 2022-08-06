import { useQuery, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
import AddSearch from './AddSearch';
import FormSearch from './FormSearch';
import TableItem from './TableItem'

const GET_LOCATIONS = gql`
  {
  lastFiveSearches {
    id
    country
    countryAbbreviation
    zip
    places {
      latitude
      longitude
      placeName
      state
      stateAbbreviation
    }
  }
}
`;

export interface LoadProps {
  id: number
  country: string
  countryAbbreviation: string
  zip: string
  places: {
    placeName: String
    state: String
    stateAbbreviation: String
    longitude: String
    latitude: String
  }[]
}

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.zipCodeSearch.map((data: LoadProps) => {
    const [ place ] = data.places;
    return (<div key={data.id}>
      <h3>{data.country}</h3>
      <br />
      <b>About this location:</b>
      <p>"{place.state}"</p>
      <br />
    </div>
  )});
}


export default function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h1 style={{ textAlign: 'center', padding: '20px 0'}}>
            Zipcode Service
            {/* <Badge bg="secondary">New</Badge> */}
          </h1>
        </Col>
      </Row>
      
      <Row className="justify-content-md-center">
        <Col>
          <FormSearch />
        </Col>
        
        {/* <Col xs lg="2">
          <FormSearch />
          1 of 3
          <Button variant="primary">Primary</Button>
        </Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row> */}
      </Row>
      <Row className="justify-content-md-center">
      <Col>
          <TableItem />
        </Col>
      </Row>
    </Container>
  );
}