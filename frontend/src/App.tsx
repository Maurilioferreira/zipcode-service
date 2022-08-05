import { useQuery, gql } from '@apollo/client';
import AddSearch from './AddSearch';

const GET_LOCATIONS = gql`
  {
    usuarios {
    id
    nome
    email
    perfis{
      nome rotulo
    }
  }
  }
`;

export interface LoadProps {
  id: number;
  nome: string;
  email: string;
}

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
 return data.usuarios.map((data: LoadProps) => (
    <div key={data.id}>
      <h3>{data.nome}</h3>
      <br />
      <b>About this location:</b>
      <p>{data.email}</p>
      <br />
    </div>
  ));
}


export default function App() {
  return (
    <div>
      <h2>
        My first Apollo app
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
      <br />
      <DisplayLocations />
      <AddSearch />
    </div>
  );
}