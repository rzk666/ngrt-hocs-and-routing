import React from 'react';
// Routing
import { Link, useHistory } from 'react-router-dom';
// HOCs
import page from './hocs/page';

const About = (props) => {
  const { history } = useHistory();
  return (
    <div>
      About page
      <div onClick={() => history.push('/')} style={{ marginTop: '30px', color: 'blue' }}>
        BACK TO HOME
      </div>
      <Link
        to={{
          pathname: '/',
          testData: {
            test: 'testone',
            testtwo: 'testtwo',
          },
        }}
      >
        Link to Homepage
      </Link>
    </div>
  );
};

export default page(About);
