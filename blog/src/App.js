import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Header } from 'semantic-ui-react';
import { Router } from '@reach/router';
import { Container } from 'semantic-ui-react';

import { Home } from './Home';
import { Post } from './Post';

const client = new ApolloClient({
    uri: 'https://kcoj688h.api.sanity.io/v1/graphql/production/default',
});

export const App = () => (
    <ApolloProvider client={client}>
        <Container className="mainContainer">
            <Header
                as="h1"
                style={{
                    fontSize: '3rem',
                    padding: '2rem',
                    fontFamily: "'Amatic SC', cursive",
                }}
                content="KOUMOIÇA : le blog de Rosemarie"
                textAlign="center"
            />
            <Router>
                <Home path="/" />
                <Post path="/:postId" />
            </Router>
        </Container>
    </ApolloProvider>
);
