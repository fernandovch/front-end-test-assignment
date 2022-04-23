import {  InMemoryCache } from '@apollo/client';
import { ApolloClient } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.HOST,    
    cache: new InMemoryCache()
});

export default client;

