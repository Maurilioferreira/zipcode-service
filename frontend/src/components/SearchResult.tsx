import Table from 'react-bootstrap/Table';

function SearchResult(props: any) {
  const { loading, error, data } = props;

  if (loading) return <p>'Submitting...'</p>;
  if (error) return <p>`Submission error! ${error.message}`</p>;
  if(!data) return <p></p>;
  if(!data.searchZippopotam) return <p></p>;

  const { id, zip, country, countryAbbreviation, places } = data.searchZippopotam;
  const [ place ] = JSON.parse(places);
  const tableItem = [];
  tableItem.push(
      <tr key={id}>
        <td>{id}</td>
        <td>{zip}</td>
        <td>{country}</td>
        <td>{countryAbbreviation}</td>
        <td>{place['place name']}</td>
        <td>{place.state}/{place['state abbreviation']}</td>
        <td>{place.latitude}</td>
        <td>{place.longitude}</td>
      </tr>
  );

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>zip</th>
          <th>country</th>
          <th>country Abbreviation</th>
          <th>place name</th>
          <th>state</th>
          <th>latitude</th>
          <th>longitude</th>
        </tr>
      </thead>
      <tbody>
        {tableItem}
      </tbody>
    </Table>
  );
}

export default SearchResult;