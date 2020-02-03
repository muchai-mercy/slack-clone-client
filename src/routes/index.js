import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Register from './Register';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/register' component={Register}/>
    </Switch>
  </BrowserRouter>
);
