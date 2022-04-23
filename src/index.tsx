import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import Home from './pages/Home';

import client from './querys/query'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <ApolloProvider client={client}>
  <React.StrictMode>
    <Home />
  </React.StrictMode>
  </ApolloProvider>
);
