import './styles/App.scss';
import { ApolloProvider } from '@apollo/client';
import { Routes } from './routes';
import { client } from "./apollo";
import { UserContext } from './UserContext';
import { useMemo, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={providerUser}>
        <Routes />
      </UserContext.Provider>
    </ApolloProvider>
  )
}

export default App;
