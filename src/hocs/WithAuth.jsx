import React from 'react';

const WithAuth = (Component) => (props) => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return (
      <Component {...props} />
    );
  }
  return (
    <div style={{ width: '100px', height: '100px', background: 'red' }}>
      ERROR
    </div>
  );
};

export default WithAuth;
