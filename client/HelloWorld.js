import React from 'react';
import Button from '@material-ui/core/Button';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { Accounts } from 'meteor/accounts-base'

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props)

    this.userId = Meteor.userId();
  }

  componentWillMount() {

    Accounts.onLogin(()=>{
      console.log(this.userId)
      if (this.userId == null) {
        this.props.history.push("/home");
      }
    });

    Accounts.onLogout(()=>{
      this.userId = null;
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" variant="contained">Hello World</Button>
        <Blaze template="loginButtons" />
      </div>
    );
  }
}
