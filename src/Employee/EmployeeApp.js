import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import EmployeeHome from './EmployeeHome';
import Login from './Login';
import Profile from './Profile';
import Settings from './Settings';

const employeeAppRoutes = [
  {
    path: '/',
    exact: true,
    children: <EmployeeHome />,
  },
  {
    path: '/login',
    exact: false,
    children: <Login />,
  },
  {
    path: '/settings/:id',
    exact: false,
    children: <Settings />,
  },
  {
    path: '/profile/:id',
    exact: false,
    children: <Profile />,
  },
];

const EmployeeApp = () => {
  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route
            path="/Employee"
            render={({ match: { url } }) => (
              <Switch>
                {employeeAppRoutes.map((route) => (
                  <Route key={route.path} path={`${url}${route.path}`} exact={route.exact}>
                    {route.children}
                  </Route>
                ))}
              </Switch>
            )}
          />
        </Switch>
      </div>
    </>
  );
};

export default EmployeeApp;
