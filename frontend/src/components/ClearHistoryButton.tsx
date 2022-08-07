import { gql, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

const ADD_SEARCH = gql`
  mutation ClearHistory {
    clearHistory {
      country
    }
  }
`;


function ClearHistoryButton(): JSX.Element {
  let input: any;
  const [addTodo, { data, loading, error }] = useMutation(ADD_SEARCH);

  if (loading) return <p>'Submitting...'</p>;
  if (error) return <p>`Submission error! ${error.message}`</p>;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <Button
          variant="danger"
          onClick={() => console.log('oi')}
        >
          Clear history
        </Button>
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default ClearHistoryButton;