import { HttpLink,  ApolloClient, InMemoryCache, DefaultOptions,ApolloLink  } from '@apollo/client';



// const defaultOptions: DefaultOptions = {
//     watchQuery: {
//       fetchPolicy: 'no-cache',
//       errorPolicy: 'ignore',
//     },
//     query: {
//       fetchPolicy: 'no-cache',
//       errorPolicy: 'all',
//     },
//   }

  const middle = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        Authorization: 'Bearer 722404d87662d000f78b6a8ce91fcd6655b0b2dfae4f3416c962f46c6d55e956'        
      }
    })
    return forward(operation);
  });

  

  const link = new HttpLink({
    uri: "https://api.blocktap.io/graphql",    
    headers:{ 
      'Authorization': 'Bearer 722404d87662d000f78b6a8ce91fcd6655b0b2dfae4f3416c962f46c6d55e956',
    'Content-Type': 'application/json',}
  });


const client = new ApolloClient({
    
    cache: new InMemoryCache(),
    link: middle.concat(link),
});

export default client;

