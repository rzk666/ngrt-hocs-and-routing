import React from 'react';
import WithLogger from './hocs/WithLogger';

const Homepage = () => (
  <div>
    Home page
  </div>
);

export default WithLogger(Homepage);
