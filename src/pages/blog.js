import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        },
                    }
                }
            }
        }
    `)

    return(
        <Layout>
            <h1>Blog.</h1>
            <h2>This is a blog page.</h2>

            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h3>{edge.node.frontmatter.title}</h3>
                            <h5>{edge.node.frontmatter.date}</h5>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage;