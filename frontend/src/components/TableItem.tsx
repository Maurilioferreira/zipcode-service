import Table from 'react-bootstrap/Table';

export interface LoadProps {
  id: number
  country: string
  countryAbbreviation: string
  zip: string
  places: string
}


function TableItem(props:any) {
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const tableItems = data.lastFiveSearches.map((data: LoadProps) => {
    const [ place ] = JSON.parse(data.places);
    return (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.zip}</td>
        <td>{data.country}</td>
        <td>{data.countryAbbreviation}</td>
        <td>{place['place name']}</td>
        <td>{place.state}/{place['state abbreviation']}</td>
        <td>{place.latitude}</td>
        <td>{place.longitude}</td>
      </tr>
  )});

  return (
    <>
      <h2>
        Last five searches
      </h2>
      <Table striped>
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
          {tableItems}
        </tbody>
      </Table>
    </>
  );
}

export default TableItem;