import { gql, useMutation } from '@apollo/client';

const ADD_SEARCH = gql`
  mutation AddTodo($type: String!) {
    novoUsuario(
      dados:{
        nome: $type,
        email: "ana33@empresa.com",
      }
    ){
      id
      nome
    }
  }
`;


function AddSearch(): JSX.Element {
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

export default AddSearch;