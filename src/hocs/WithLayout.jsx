import React from 'react';
// Components
import NavBar from '../components/layout/NavBar';

const WithLayout = (Component) => (props) => (
  <>
    <NavBar />
    <Component {...props} />
  </>
);

export default WithLayout;
