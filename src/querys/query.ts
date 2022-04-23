import {   ApolloClient, InMemoryCache, DefaultOptions } from '@apollo/client';

const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }


const client = new ApolloClient({
    uri: "https://api.blocktap.io/graphiql",    
    cache: new InMemoryCache(),
    
});

export default client;

