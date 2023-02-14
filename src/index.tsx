import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { setContext } from '@apollo/client/link/context';

export const TOKEN_KEY = 'testEcotoken';

const httpLink = createHttpLink({
  uri: 'https://eco-api.its-globaltek.com/api/v1/admin',
  credentials: 'include'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = null;

  try {
    const jsonData = localStorage.getItem(TOKEN_KEY);
    if (jsonData) {
      token = JSON.parse(jsonData)?.data;
    }
  } catch (error) {
    console.log('getItem Token', error);
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Accept: 'mutipart/form-data',
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
