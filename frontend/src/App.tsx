import { useQuery, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormSearch from './components/FormSearch';
import TableList from './components/TableList'
import ClearHistoryButton from './components/ClearHistoryButton'

export const GET_ZIPCODE = gql`
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
  const { loading, error, data, refetch } = useQuery(GET_ZIPCODE);

  const tableItemProps = {
    loading,
    error,
    data
  }
  const refetchProps = {
    refetchAllData: refetch,
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
          <FormSearch {...refetchProps} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableList {...tableItemProps} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ClearHistoryButton  {...refetchProps}/>
        </Col>
      </Row>
    </Container>
  );
}