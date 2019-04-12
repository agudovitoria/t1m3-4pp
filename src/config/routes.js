import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CalendarPage from '../containers/CalendarPage';
import LoginPage from '../containers/LoginPage';
import NotFoundPage from '../containers/NotFoundPage';

export default (
  <Switch>
    <Route exact path="/" component={CalendarPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
