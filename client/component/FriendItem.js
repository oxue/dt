import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Typography,
  Box,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'
import { withRouter } from 'react-router-dom';
import { getInitials } from '../util/Utils.js'

class FriendItem extends React.Component {

  constructor(props) {
    super(props);
  }

  goToFriendPage = () => {
    this.props.history.push(`friend/${this.props.data._id}`);
  }

  render () {
    return (
      <ListItem display="flex" className="frienditem" onClick={this.goToFriendPage}>
        <ListItemAvatar className="frienditem-thumb">
          <Avatar>{getInitials(this.props.data.name)}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={this.props.data.name}
          secondary={this.props.data.app}> </ListItemText>
      </ListItem>
    )
  }
}

export default withRouter(FriendItem);
