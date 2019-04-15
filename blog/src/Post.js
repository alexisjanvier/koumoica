import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from '@reach/router';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Image, Header } from 'semantic-ui-react';
import BlockContent from '@sanity/block-content-to-react';

export const Post = ({ postId }) => (
    <Query
        query={gql`
            {
                Post(id: "${postId}") {
                    _id
                    title
                    bodyRaw
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
                <Container>
                    <Link to="/">retour à la liste</Link>
                    <Image src={data.Post.mainImage.asset.url} fluid />
                    <Header
                        as="h1"
                        style={{ margin: '2rem' }}
                        content={data.Post.title}
                        textAlign="center"
                    />
                    {data.Post.bodyRaw.map(block => (
                        <BlockContent
                            key={block._key}
                            blocks={block}
                            imageOptions={{ w: 320, h: 240, fit: 'max' }}
                            projectId="kcoj688h"
                            dataset="production"
                        />
                    ))}
                </Container>
            );
        }}
    </Query>
);
