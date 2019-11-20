import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  condition,
  redirect,
  ...rest
}) => (
  <Route
    {...rest}
    render={({ location, ...routeRest }) =>
      condition ? (
        <Component {...routeRest} />
      ) : (
        <Redirect
          to={{
            pathname: redirect,
            state: { from: location },
          }}
        />
      )
    }
  />
);

PrivateRoute.defaultProps = {
  condition: true,
  redirect: '',
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  redirect: PropTypes.string,
  condition: PropTypes.bool,
};

export default PrivateRoute;
