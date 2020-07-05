import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import Friends from '../api/friends.js';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import { getInitials } from './util/Utils.js'
import {
  Typography,
  Slider,
  Button,
  Box,
  TextField,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar
} from '@material-ui/core';
import { useState } from 'react';
import { debounce } from 'lodash';

function FriendDetailText(props) {
  const friendId = props.friendId;
  const updateValue = debounce((value) => {
    const update = {}
    update[props.valueName] = value;
    Friends.update(friendId, { $set: update});
  }, 1000);
  return (
    <Box display="block" className="detail-form-input">
    <TextField
      display="block"
      variant='outlined'
      defaultValue={props.defaultValue}
      label={props.label}
      color='primary'
      onInput={(e)=>updateValue(e.target.value)}></TextField>
    </Box>
  );
}

function FriendDetail(props) {
  if (props.friend){
    // const { name, age } = props.friend;
    // const [friendName, setFriendName] = useState(name);
    // const [friendAge, setFriendAge] = useState(parseInt(age));
    const [attractiveness, setAttractiveness] = useState(parseFloat(props.friend.attractiveness));
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [app, setApp] = useState(props.friend.app);

    const friendId = props.match.params.id;

    const goBack = () => {
      props.history.push("/home");
    }

    const deleteSelf = () => {
      if (!deleteConfirm) {
        setDeleteConfirm(true);
        return;
      }
      Friends.remove(friendId);
      props.history.push("/home");
    }

    const getDeleteText = () => {
      if (deleteConfirm) {
        return "Are You Sure?";
      }
      return "Delete Friend";
    }

    const updateAttractiveness = debounce((value) => {
      Friends.update(friendId, { $set: { attractiveness: value }});
    }, 1000);

    const updateNotes = debounce((value) => {
      Friends.update(friendId, { $set: { notes: value }});
    }, 1000);

    const updateApp = (value) => {
      setApp(value);
      Friends.update(friendId, { $set: { app: value }});
    }

    const renderSocials = () => (
      <Box>
        <Box fontSize={30} className="detail-category-title">
          Socials
        </Box>
        <Box display="block" className="detail-form-input">
          <InstagramIcon />
          <FriendDetailText
            friendId={friendId}
            valueName='instagram'
            defaultValue={props.friend.instagram}
            label='Instagram'
            />
        </Box>
        <Box display="block" className="detail-form-input">
          <PhoneIcon />
          <FriendDetailText
            friendId={friendId}
            valueName='phone'
            defaultValue={props.friend.phone}
            label='Phone'
            />
        </Box>
      </Box>
    )

    return (
      <Box>
        <Button variant='contained' onClick={goBack}> &lt; </Button>
        <Box
          className="frienditem-thumb"
          display='flex'>
          <Avatar>{getInitials(props.friend.name)}</Avatar>
          <Box
            display='flex'
            className='attractiveness-big-text'
            justifyContent='center'
            alignItems='center'>
            {parseFloat(attractiveness)}
          </Box>
        </Box>

        <Box fontSize={30} className="detail-category-title">
          Basic Info
        </Box>
        <Box>
          <Box display="block" className="detail-form-input">
            <FriendDetailText
              friendId={friendId}
              valueName='name'
              defaultValue={props.friend.name}
              label='Name'
              />
          </Box>

          <Box display="block" className="detail-form-input">
            <FriendDetailText
              friendId={friendId}
              valueName='age'
              defaultValue={props.friend.age}
              label='Age'
              />
          </Box>

          <Box display="block" className="detail-form-input">
            <FormControl>
              <InputLabel variant='outlined' id="app-select-label">Dating App</InputLabel>
              <Select
                labelId="app-select-label"
                value={app}
                variant='outlined'
                label='Dating App'
                onChange={(e)=>updateApp(e.target.value)}>
                <MenuItem value="NoneSelected">(none selected)</MenuItem>
                <MenuItem value="Tinder">Tinder</MenuItem>
                <MenuItem value="Hinge">Hinge</MenuItem>
                <MenuItem value="Hinge">Bumble</MenuItem>
              </Select>
            </FormControl>
          </Box>


        </Box>

        <Divider variant="middle" />

        <Box fontSize={30} className="detail-category-title">
          Attactiveness
        </Box>

        <Box className="attractiveness-slider-container">
          <Slider
            getAriaValueText={(v, i) => v}
            aria-labelledby="discrete-slider-attractiveness"
            step={0.5}
            marks
            min={0}
            max={10}
            defaultValue={attractiveness}
            onChange={()=>null}
            onChangeCommitted={(e, v)=>{
              updateAttractiveness(parseFloat(v))
              setAttractiveness(parseFloat(v));
            }}
            valueLabelDisplay="auto"
          />
        </Box>
        <Divider variant="middle" />
        {renderSocials()}
        <Divider variant="middle" />
        <Box fontSize={30} className="detail-category-title">
          Notes
        </Box>
        <Box display="block" className="detail-form-input">
          <TextField
            fullWidth
            display="block"
            variant='outlined'
            defaultValue={props.friend.notes}
            color='primary'
            multiline
            onInput={(e)=>updateNotes(e.target.value)}></TextField>
        </Box>
        <Button variant='contained' color='secondary' onClick={deleteSelf}> {getDeleteText()} </Button>
      </Box>
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
