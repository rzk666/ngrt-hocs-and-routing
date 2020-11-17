import React from 'react';
// Page components
import Homepage from './Homepage';
import About from './About';
// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
    </Switch>
  </Router>
);

export default App;
