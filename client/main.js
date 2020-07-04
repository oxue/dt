import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './HelloWorld.js';
import RenderRoutes from './routes.js';

Meteor.startup(() => {
  render(<RenderRoutes />, document.getElementById('app'));
});
