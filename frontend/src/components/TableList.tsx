import Table from 'react-bootstrap/Table';
import TableItem from './TableItem';
import TableHead from './TableHead';

export interface LoadProps {
  id: number
  country: string
  countryAbbreviation: string
  zip: string
  places: string
}


function TableList(props:any) {
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const lastFive = (Object.keys(data.lastFiveSearches).length > 0) ? data.lastFiveSearches : [];
  const tableItems = lastFive.map((data: LoadProps) => {
    const tableItemProps = {
      data
    }
    return <TableItem {...tableItemProps} key={data.id}/>
});

  return (
    <>
      <h2>
        Last five searches
      </h2>
      <Table striped>
        <TableHead />
        <tbody>
          {tableItems}
        </tbody>
      </Table>
    </>
  );
}

export default TableList;