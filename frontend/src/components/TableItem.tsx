function TableItem(props:any) {
  const { id, zip, country, countryAbbreviation, places } = props.data;
  const [ place ] = JSON.parse(places);

  return (
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
}

export default TableItem;