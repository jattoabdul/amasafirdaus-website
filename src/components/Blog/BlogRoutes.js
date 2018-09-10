import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { NotFound } from '../../components/Main';
import Blog from './Blog';
import SingleBlog from './SingleBlog';


/**
 * DashBoard Routes
 * @param {*} props 
 * @return {any} Route
 */
const BlogRoutes = props => (
  <Switch>
    <Route exact path="/blog" render={() => <Blog {...props} />} />
    <Route
      path="/blog/:slug"
      render={() => <SingleBlog {...props} />}
    />
    {/*<Route component={NotFound} />*/}
  </Switch>
);

export default BlogRoutes;
