import React from 'react';
import WithLogger from './hocs/WithLogger';
import WithLayout from './hocs/WithLayout';
import WithAuth from './hocs/WithAuth';

const Homepage = () => (
  <div>
    Home page
  </div>
);

export default WithAuth(WithLayout(WithLogger(Homepage)));
