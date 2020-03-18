import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetaData{
                    author
                }
            }
        }
    `);
    return (
        <footer>
            <div>
                <p>Created by {data.site.siteMetaData.author} using gatsby, @copyright 2020</p>
            </div>
        </footer>
    )
};

export default Footer;