// import React from 'react';
// import { Link } from 'react-router';
// import AsideContainer from 'ui/aside-container';

// export default React.createClass({
//     render: function() {
//         return (
//             <div className="app">
//                 <nav>
//                     <Link to="/">Home</Link><br />
//                     <Link to="/widgets">Widgets</Link><br />
//                     <Link to="/users">Users</Link><br />
//                     <Link to="/users/1">Details</Link>
//                     <Link to="/wrong">Wrong</Link>
//                 </nav>
//                 <AsideContainer />
//                 <main>
//                     {this.props.children}
//                 </main>
//             </div>
//         )
//     }
// });


import React, { Component } from 'react';
import { Link } from 'react-router';
//import Nav from './Nav.react';
import { connect } from 'react-redux';
//import auth from '../utils/auth';

class App extends Component {
  render() {
    return(
        <div className="wrapper">
            Welcome  
       </div> 
    )
  }
}

export default App;
