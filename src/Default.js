import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Page404 from "./components/Page404";
import ReduxCount from "./count/ReduxCount";
import SimpleCount from "./count/SimpleCount";
import FcCount from "./count/FcCount";

const Default = () => {
  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SimpleCount" exact component={SimpleCount} />
          <Route path="/ReduxCount" exact component={ReduxCount} />
          <Route path="/FcCount" exact component={FcCount} />
          <Route component={Page404} />
        </Switch>
      </div>
    </>
  );
};

export default Default;
