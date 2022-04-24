import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import Home from './pages/Home';

import client from './querys/query'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Home />
    </ApolloProvider>
  </React.StrictMode>
);
