import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Friends } from '../api/friends.js';
import {
  Typography,
  Slider,
  Button,
  Box,
  TextField
} from '@material-ui/core';
import { useState } from 'react';
import { debounce } from 'lodash';

function FriendDetail(props) {
  if (props.friend){
    // const { name, age } = props.friend;
    // const [friendName, setFriendName] = useState(name);
    // const [friendAge, setFriendAge] = useState(parseInt(age));

    const friendId = props.match.params.id;

    const goBack = () => {
      props.history.push("/home");
    }

    const deleteSelf = () => {
      Friends.remove(friendId);
      props.history.push("/home");
    }

    const updateName = debounce((value) => {
      Friends.update(friendId, { $set: { name: value }})
    }, 1000);

    const updateAge = debounce((value) => {
      Friends.update(friendId, { $set: { age: value }})
    }, 1000);

    const updateAttractiveness = debounce((value) => {
      console.log(value);
      Friends.update(friendId, { $set: { attractiveness: value }})
    }, 1000);

    return (
      <div>
        <Button variant='contained' onClick={goBack}> &lt; </Button>
        <Button variant='contained' color='secondary' onClick={deleteSelf}> Delete </Button>
        <div className="frienditem-thumb">
          <img src='http://placekitten.com/200/200' />
          <Box className='attractiveness-big-text'>{props.friend.attractiveness}</Box>
        </div>
        <TextField
          variant='outlined'
          defaultValue={props.friend.name}
          label='Name'
          color='primary'
          onInput={(e)=>updateName(e.target.value)}></TextField>

        <TextField
          variant='outlined'
          defaultValue={props.friend.age}
          label='Age'
          color='primary'
          onInput={(e)=>updateAge(parseInt(e.target.value))}></TextField>
        <Box className="attractiveness-slider-container">
          <Typography id="discrete-slider-attractiveness" gutterBottom>
            Attactiveness
          </Typography>
          <Slider
            defaultValue={5}
            getAriaValueText={(v, i) => v}
            aria-labelledby="discrete-slider-attractiveness"
            step={0.5}
            marks
            min={0}
            max={10}
            defaultValue={props.friend.attractiveness}
            onChange={(e, v)=>updateAttractiveness(parseFloat(v))}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    );
  }
  return (
    <div />
  )
}

export default withTracker((props) => {
  return {
    friend: Friends.findOne({_id:props.match.params.id}),
    friends: Friends.find({}).fetch()
  };
})(FriendDetail);
