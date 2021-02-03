import './styles/App.scss';
import { ApolloProvider } from '@apollo/client';
import { Routes } from './routes';
import { client } from "./apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default App;
