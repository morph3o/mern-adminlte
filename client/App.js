/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';

// Import Routes
import routes from './routes';

import 'admin-lte/dist/js/app';
import 'bootstrap/dist/js/bootstrap.min';

// Base stylesheet
require('./main.css');
require('admin-lte/dist/css/AdminLTE.min.css');
require('admin-lte/dist/css/skins/_all-skins.min.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');

export default function App(props) {
  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </IntlWrapper>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
