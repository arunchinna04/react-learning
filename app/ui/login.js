import React, { Component} from 'react';
import { connect } from 'react-redux';
//import Form from '../Form.react';
//import auth from '../../utils/auth';
// import { login } from '../../actions/AppActions';
// import LoadingIndicator from '../LoadingIndicator.react';

export default class Login extends Component {
    render() {
    return (
         <div>
            //<div className="form__field-wrapper">
              <input className="form__field-input" type="text" id="username" value={this.props.data.username} placeholder="frank.underwood" onChange={this._changeUsername.bind(this)} autoCorrect="off" autoCapitalize="off" spellCheck="false" />
              <label className="form__field-label" htmlFor="username">Username</label>
        </div>
           //<div className="form__field-wrapper">
           // <input className="form__field-input" id="password" type="password" value={this.props.data.password} placeholder="••••••••••"  onChange={this._changePassword.bind(this)} />
           // <label className="form__field-label" htmlFor="password">Password</label>
          //</div>
        //</div>
        );
    }
  

    
}