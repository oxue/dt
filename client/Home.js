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

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { Cloudinary } from 'cloudinary-core';
import $ from 'jquery';

function Home(props) {

  handleCreateNewFriend = () => {
    Friends.insert({
      user: Meteor.userId(),
      createdAt: Date.now()
    });
  }

  handleUploadClick = (e) => {

    const file = event.target.files[0];

    var data = new FormData();
    data.append('upload_preset', 'syeacsaq');
    data.append('file', file);
    data.append('cloud_name', 'dtadmin');

    const config = {
        method: "POST",
        body: data
    };

   var imgurl = "https://api.cloudinary.com/v1_1/dtadmin/image/upload";

   fetch(imgurl, config)
    .then(responseData => {
      result = responseData.json().then(data=>{
        label = Meteor.call("google_vision_call", data.url, (e, r) => {
          console.log(r);
        });
      })
    });
  }

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={handleCreateNewFriend}>
        Create New Friend
      </Button>
      <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleUploadClick}
        hidden={true}
      />
      <Button
        color="primary"
        variant="contained">
        <label htmlFor="contained-button-file">
        Create From Screenshot
        </label>
      </Button>

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
