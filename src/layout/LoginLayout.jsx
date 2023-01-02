import React from 'react';
import PageContent from './PageContent';

const LoginLayout = ({ children }) => {
    return (
        <>
            <PageContent>
                {children}
            </PageContent>
        </>
    )
}

export default LoginLayout;