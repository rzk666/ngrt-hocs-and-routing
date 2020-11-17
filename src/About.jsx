import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import WithLogger from './hocs/WithLogger';
import WithLayout from './hocs/WithLayout';

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

export default WithLayout(WithLogger(About));
