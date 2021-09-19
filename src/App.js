import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./reducers/store";
import Default from "./Default";
import EmployeeApp from "./Employee/EmployeeApp";
import Todo from "./Todo/Todo";

import "./index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/Todo" component={Todo} />
          <Route path="/Employee" component={EmployeeApp} />
          <Route path="/" component={Default} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
