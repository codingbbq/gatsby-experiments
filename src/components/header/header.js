import React from 'react';
import { Link,  graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetaData{
                    title
                }
            }
        }
    `);

    return(
        <header className={ headerStyles.header}>
            <h1>
    <Link to="/">{data.site.siteMetaData.title}</Link>
            </h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    )
}

export default Header;