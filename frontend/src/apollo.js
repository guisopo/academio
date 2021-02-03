import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = process.env.REACT_APP_API_URI;
const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
});