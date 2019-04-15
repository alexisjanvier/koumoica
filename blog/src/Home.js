import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Container, Item } from 'semantic-ui-react';
import { Link } from '@reach/router';

export const Home = () => (
    <Query
        query={gql`
            {
                allPosts {
                    _id
                    title
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
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
                <div className="App">
                    <Container>
                        <Item.Group>
                            {data.allPosts.map(post => (
                                <Item key={post._id}>
                                    <Item.Image
                                        size="tiny"
                                        src={post.mainImage.asset.url}
                                    />

                                    <Item.Content>
                                        <Item.Header>
                                            <Link to={`/${post._id}`}>
                                                {post.title}
                                            </Link>
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
