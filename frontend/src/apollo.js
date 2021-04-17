import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context'

const cache = new InMemoryCache();
const link = new createHttpLink({ uri: 'http://localhost:4000/graphql' });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('academio-user-token')

  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
  connectToDevTools: true
});