import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import Friends from '../api/friends.js';

import FriendItem from './component/FriendItem.js';
import {
  Button,
  List,
  ListItem
} from '@material-ui/core';

function Home(props) {

  handleCreateNewFriend = () => {
    Friends.insert({
      user: Meteor.userId(),
      createdAt: Date.now()
    });
  }

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={handleCreateNewFriend}>+</Button>
      <List>
        {props.friends.map((friend) => (
          <FriendItem key={friend._id} data={friend} />
        ))}
      </List>
    </div>
  );
}

export default withTracker(() => {
  return {
    friends: Friends.find(
      {user: Meteor.userId()},
      { sort: { createdAt: -1 } }).fetch(),
  };
})(Home);
