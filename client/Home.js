import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Friends } from '../api/friends.js';

import FriendItem from './component/FriendItem.js';
import Button from '@material-ui/core/Button';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log("mount home");
  }

  handleCreateNewFriend = () => {
    Friends.insert({
      name: "Jane Doe",
      age: Math.random() * 100,
      createdAt: new Date(),
      user: Meteor.userId(),
    });
  }

  render() {
    console.log(this.props.friends);
    return (
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={this.handleCreateNewFriend}>+</Button>
        <ul>
          {this.props.friends.map((friend) => (
            <li key={friend._id}>
              <FriendItem data={friend} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    friends: Friends.find(
      {user: Meteor.userId()},
      { sort: { createdAt: -1 } }).fetch(),
  };
})(Home);
