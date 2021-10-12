import React from 'react';
import {
  Route,
} from 'react-router-dom';
import propTypes from 'prop-types';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

AppRoute.propTypes = {
  component: propTypes.any,
  layout: propTypes.any
};

export default AppRoute;
