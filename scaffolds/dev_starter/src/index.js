import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import configureStore from './store';
import {Router, Route, hashHistory, browserHistory} from 'react-router';

import App from './containers/App';

import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import './styles/app.less';
import 'react-widgets/lib/less/react-widgets.less'
import 'fixed-data-table/dist/fixed-data-table.css'
import './styles/switch.less'

import Moment from 'moment'
import momentLocalizer from 'react-widgets/lib/localizers/moment'

momentLocalizer(Moment);

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App} />
        </Router>
      </Provider>
    );
  }
}
ReactDOM.render(<Root />, document.getElementById('app'))
