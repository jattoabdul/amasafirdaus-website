import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { NotFound } from '../../components/Main';
import Admin from './Admin';


/**
 * DashBoard Routes
 * @param {*} props 
 * @return {any} Route
 */
const AdminRoutes = props => (
  <Switch>
    <Route exact path="/admin" render={() => <Admin {...props} />} />
    {/*<Route
      path="/admin/post/:slug"
      render={() => <Something {...props} />}
    />*/}
    {/*<Route component={NotFound} />*/}
  </Switch>
);

export default AdminRoutes;
