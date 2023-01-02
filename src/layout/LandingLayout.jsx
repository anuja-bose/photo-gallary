import React from 'react';
import Header from './Header';
import PageContent from './PageContent';

const LandingLayout = ({ children }) => {
    return (
        <>
            <Header className="fixed-top" />
            <PageContent>
                {children}
            </PageContent>
        </>
    )
}

export default LandingLayout;