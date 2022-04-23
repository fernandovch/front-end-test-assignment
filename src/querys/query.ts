import {  InMemoryCache } from '@apollo/client';
import { ApolloClient } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.blocktap.io/graphiql',
    // uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache()
});

export default client;

