import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

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
                        }
                        fields{
                            slug
                        }
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
                {data.allMarkdownRemark.edges.map((edge, index) => {
                    return (
                        <li key={index}>
                            <h3>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    {edge.node.frontmatter.title}
                                </Link>
                            </h3>
                            <h5>{edge.node.frontmatter.date}</h5>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage;