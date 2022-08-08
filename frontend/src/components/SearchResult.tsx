import Table from 'react-bootstrap/Table';
import TableItem from './TableItem';
import TableHead from './TableHead';

function SearchResult(props: any) {
  const { loading, error, data } = props;

  if (loading) return <p>'Submitting...'</p>;
  if (error) return <p>`Submission error! ${error.message}`</p>;
  if(!data) return <p></p>;
  if(!data.searchZippopotam) return <p></p>;

  const { id } = data.searchZippopotam;
  const tableItem = [];
  const tableItemProps = {
    data: data.searchZippopotam
  }
  tableItem.push(
      <TableItem {...tableItemProps} key={id}/>
  );

  return (
    <Table striped bordered hover variant="dark">
      <TableHead />
      <tbody>
        {tableItem}
      </tbody>
    </Table>
  );
}

export default SearchResult;