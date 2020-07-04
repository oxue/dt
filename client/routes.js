import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// route components
import HelloWorld from './../client/HelloWorld.js'
import Home from './../client/Home.js'
import FriendDetail from './FriendDetail.js'
// import AuthPageJoin from '../../ui/pages/AuthPageJoin.js';

const browserHistory = createBrowserHistory();

export default class RenderRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path="/" component={HelloWorld} />
          <Route exact path="/home" component={Home} />
          <Route path="/friend/:id" component={FriendDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}
