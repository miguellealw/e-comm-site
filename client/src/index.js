import React from 'react';
import ReactDOM from 'react-dom';
// import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createUploadLink } from 'apollo-upload-client';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable } from 'apollo-link';


import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// const client = new ApolloClient({
//   uri: 'http://localhost:5000/graphql',
//   // fetchOptions: {
//   //   credentials: 'include'
//   // },
//   request: async operation => {
//     operation.setContext({
//       fetchOptions: {
//         credentials: 'include',
//       }
//     });
//   }
// });


/* 
<========================================>
  Apollo Client Setup
<========================================>
*/
const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      movie: (_, {id}, { getCacheKey }) =>
        getCacheKey({
          __typename: 'Movie',
          id
        })
    }
  }
});

const request = async (operation) => {
  operation.setContext({
    fetchOptions: {
      credentials: 'include'
    }
  });
};

/* LINKS */
// const requestLink = new ApolloLink((operation, forward) =>
//   new Observable(observer => {
//     let handle;
//     Promise.resolve(operation)
//       .then(oper => request(oper))
//       .then(() => {
//         handle = forward(operation).subscribe({
//           next: observer.next.bind(observer),
//           error: observer.error.bind(observer),
//           complete: observer.complete.bind(observer),
//         });
//       })
//       .catch(observer.error.bind(observer));

//     return () => {
//       if (handle) handle.unsubscribe();
//     };
//   })
// );

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors)
  }
  if (networkError) {
    console.log(networkError)
  }
})

const withClientStateLink = withClientState({
  defaults: {
    isConnected: true
  },
  resolvers: {
    Mutation: {
      updateNetworkStatus: (
        _, 
        { isConnected }, 
        { cache }
      ) => {
        cache.writeData({
          data: {
            isConnected
          }
        });
        return null;
      }
    }
  },
  cache
})

const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    // requestLink,
    withClientStateLink,
    new HttpLink({
      uri: 'http://localhost:5000/graphql',
      credentials: 'include'
    })
  ]),
  connectToDevTools: true,
  cache
});


const Root = () => (
  <ApolloProvider client={ client }>
    <App /> 
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
