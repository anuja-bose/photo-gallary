import React from 'react';
import PageContent from './PageContent';

const JoinLayout = ({ children }) => {
    return (
        <>
            <PageContent>
                {children}
            </PageContent>
        </>
    )
}

export default JoinLayout;