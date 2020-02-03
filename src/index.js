import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import 'semantic-ui-css/semantic.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import Routes from './routes';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <Routes/>
  </ApolloProvider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
