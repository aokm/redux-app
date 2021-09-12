import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './reducers/store';
import Default from './Default';
import EmployeeApp from './Employee/EmployeeApp';

import './index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/Employee" component={EmployeeApp} />
          <Route path="/" component={Default} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
