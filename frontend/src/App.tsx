import { useQuery, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
import AddSearch from './AddSearch';
import FormSearch from './components/FormSearch';
import TableItem from './components/TableItem'
import ClearHistoryButton from './components/ClearHistoryButton'

const GET_ZIPCODE = gql`
  {
  lastFiveSearches {
    id
    country
    countryAbbreviation
    zip
    places
  }
}
`;

export default function App() {
  const { loading, error, data } = useQuery(GET_ZIPCODE);

  const searchBarProps = {
    loading,
    error,
    data
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ textAlign: 'center', padding: '20px 0'}}>
            Zipcode Service
          </h1>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <FormSearch />
        </Col>
      </Row>
      <Row>
        <Col>
          <ClearHistoryButton />
        </Col>
      </Row>
      <Row>
      <Col>
          <TableItem {...searchBarProps} />
        </Col>
      </Row>
    </Container>
  );
}