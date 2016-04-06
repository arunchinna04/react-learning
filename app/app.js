import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Routes from 'config/routes'; 
// const Routes = <Route component={App}>
//           <Route path="/" component={Home} />
//           <Route path="/widgets" component={WidgetContainer} />
//           <Route path="/users" component={UsersContainer} />
//           <Route path="/users/1" component={UsersContainer} />
//        </Route>
//         <Route path="*" component={UsersContainer} />

// ReactDOM.render(
   
//     <Router history={browserHistory}>
//         <Route component={App}>
//           <Route path="/" component={Home} />
//           <Route path="/widgets" component={WidgetContainer} />
//           <Route path="/users" component={UsersContainer} />
//           <Route path="/users/1" component={UsersContainer} />
//        </Route>
//         <Route path="*" component={UsersContainer} />
      
// </Router>, document.getElementById('root'))

ReactDOM.render(<Router history={browserHistory} routes={Routes} />, document.getElementById('root'))






