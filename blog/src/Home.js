import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Container, Image, Item } from 'semantic-ui-react';
import { Link } from '@reach/router';

import { urlFor } from './sanity';

export const Home = () => (
    <Query
        query={gql`
            {
                allPosts {
                    _id
                    title
                    description
                    mainImage {
                        asset {
                            url
                        }
                    }
                }
            }
        `}
    >
        {({ loading, error, data }) => {
            if (loading)
                return (
                    <Container>
                        <p>Loading...</p>
                    </Container>
                );
            if (error)
                return (
                    <Container>
                        <p>Error :( {error.message}</p>
                    </Container>
                );
            return (
                <div className="App">
                    <Container>
                        <Item.Group>
                            {data.allPosts.map(post => (
                                <Item key={post._id} className="listItem">
                                    <Link
                                        to={`/${post._id}`}
                                        style={{ margin: '0 2rem 0 0' }}
                                    >
                                        <Image
                                            src={urlFor(post.mainImage)
                                                .size(200, 200)
                                                .fit('crop')
                                                .crop('center')
                                                .url()}
                                            alt={post.title}
                                            circular
                                        />
                                    </Link>

                                    <Item.Content>
                                        <Item.Header>
                                            <Link to={`/${post._id}`}>
                                                <h2>{post.title}</h2>
                                            </Link>
                                            <p>{post.description}</p>
                                        </Item.Header>
                                    </Item.Content>
                                </Item>
                            ))}
                        </Item.Group>
                    </Container>
                </div>
            );
        }}
    </Query>
);
