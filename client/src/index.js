import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import 'antd/dist/antd.css';
// import gql from 'graphql-tag';

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  // fetchOptions: {
  //   credentials: 'include'
  // },
  request: async operation => {
    operation.setContext({
      fetchOptions: {
        credentials: 'include',
      }
    });
  }
});

// client.mutate({
//   mutation: gql`
//     mutation {
//       signup(email: "test123@gmail.com", fullName: "Test Acount", password: "test123")
//     }
//   `
// }).then(result => console.log(result));

const Root = () => (
  <ApolloProvider client={ client }>
    <App /> 
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
