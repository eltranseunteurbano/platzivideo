import React from 'react';

import Header from '..//Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children}) => (

    <React.Fragment>
        <Header />
            {children}
        <Footer />
    </React.Fragment>
);

export default Layout;