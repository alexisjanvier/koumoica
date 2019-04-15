import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Container, Item } from 'semantic-ui-react';

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
                        <Item.Group link>
                            {data.allPosts.map(post => (
                                <Item key={post._id}>
                                    <Item.Image
                                        size="tiny"
                                        src={post.mainImage.asset.url}
                                    />

                                    <Item.Content>
                                        <Item.Header>{post.title}</Item.Header>
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
