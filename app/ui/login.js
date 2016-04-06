import React, { Component, PropTypes} from 'react';
import { Navigation } from 'react-router'
//import { Router, useRouterHistory } from 'react-router'

export default class Login extends Component {

  contextTypes: {
    router: PropTypes.object.isRequired
  }

  // This will be called when the user clicks on the login button
  login(e) {
    e.preventDefault();
    // Here, we call an external AuthService. We’ll create it in the next step
    
    const email = this.refs.email.value
    const pass = this.refs.pass.value
    console.log(" logging in", email, pass);
    
   // this.context.router.push('/users')

  }

  render() {
    return (
      <div>
        <form role="form">
        <div className="form-group">
          <input type="text" ref="email" placeholder="Username" />
          <input type="password" ref="pass" placeholder="Password" />
        </div>
        <button type="submit" onClick={this.login.bind(this)}>Submit</button>
      </form>
    </div>
    );
  }
}

