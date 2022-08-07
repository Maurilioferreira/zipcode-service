import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const ADD_SEARCH = gql`
  mutation ClearHistory {
    clearHistory {
      country
    }
  }
`;

function ClearHistoryButton(props: any): JSX.Element {
  const { refetchAllData } = props;
  const [clearHistory, { data, loading, error }] = useMutation(ADD_SEARCH);

  if (loading) return <p>'Submitting...'</p>;
  if (error) return <p>`Submission error! ${error.message}`</p>;

  return (
      <Button
        variant="danger"
        onClick={() => clearHistory().then(() => refetchAllData())}
      >
        Clear history
      </Button>
  );
}

export default ClearHistoryButton;