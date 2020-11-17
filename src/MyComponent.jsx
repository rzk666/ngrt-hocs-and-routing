import React from 'react';
import { withLogger } from './libs';

const MyComponent = () => (
  <div>
    test
  </div>
);

export default withLogger(MyComponent);
