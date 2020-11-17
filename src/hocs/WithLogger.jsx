import React from 'react';
import { useHistory } from 'react-router-dom';

const WithLogger = (Component) => (props) => {
  const history = useHistory();
  console.log(history);
  return (
    <Component {...props} />
  );
};

export default WithLogger;
