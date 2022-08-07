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

  console.log(loading)
  console.log(error)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  
  const tableItems = data.lastFiveSearches.map((data: LoadProps) => {
    // const [ place ] = data.places;
    const [ place ] = JSON.parse(data.places);
    // console.log(data)
    // console.log('data.places => ',data.places)
    console.log('place => ', place);
    // console.log('longitude => ',place.longitude)
    // console.log(place['place name'])
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
  );
}

export default TableItem;