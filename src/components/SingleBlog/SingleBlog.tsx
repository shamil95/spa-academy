import React from 'react';
import Header from '../Header/Header';
import WebinarHeader from '../WebinarHeader/WebinarHeader';
import WebinarBody from '../WebinarBody/WebinarBody';
import RelatedArticles from '../RelatedArticles/RelatedArticles';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
const SingleBlog: React.FC = () => {
    return (
        <>
            <Header />
            <WebinarHeader />
            <WebinarBody />
            <RelatedArticles />
            <Subscribe
                title='Subscribe to our blogs'
                description='Stay in the know and don’t miss a beet. No spam, no junk, important updates only.'
            />
            <Footer />
        </>
    );
};

export default SingleBlog;
