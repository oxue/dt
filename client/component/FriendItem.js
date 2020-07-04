import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import { withRouter } from 'react-router-dom';

class FriendItem extends React.Component {

  constructor(props) {
    super(props);
  }

  goToFriendPage = () => {
    this.props.history.push(`friend/${this.props.data._id}`);
  }

  render () {
    return (
      <Container className="frienditem" onClick={this.goToFriendPage}>
        <div className="frienditem-thumb">
          <img src='http://placekitten.com/200/200' />
        </div>
        <span>Name: {this.props.data.name} </span>
        <span>Age: {this.props.data.age} </span>
      </Container>
    )
  }
}

export default withRouter(FriendItem);
