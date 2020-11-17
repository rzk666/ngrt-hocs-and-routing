import React from 'react';
// Components
import NavBar from '../components/layout/NavBar';

const Layout = ({ children }) => (
  <div style={{
    backgroundColor: 'green',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }}
  >
    {children}
  </div>
);

const WithLayout = (Component) => (props) => (
  <Layout>
    <NavBar />
    <Component {...props} />
  </Layout>
);

export default WithLayout;
