import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Header } from 'semantic-ui-react';

import { Home } from './Home';

const client = new ApolloClient({
    uri: 'https://kcoj688h.api.sanity.io/v1/graphql/production/default',
});

export const App = () => (
    <ApolloProvider client={client}>
        <Header
            as="h1"
            style={{ margin: '2rem' }}
            content="KouMoiÇa : le blog de Rosemarie"
            textAlign="center"
        />
        <Home />
    </ApolloProvider>
);
