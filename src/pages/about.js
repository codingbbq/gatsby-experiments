import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

const AboutPage = () => {
    return (
        <Layout>
            <h1>About.</h1>
            <h2>This is an about page.</h2>
            <p>Contact me for more details <Link to='/contact'>Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage;