import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About.</h1>
            <h2>This is an about page.</h2>
            <p>Contact me for more details <Link to='/contact'>Contact me</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage;