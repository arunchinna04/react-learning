import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// Layouts
import App from 'layouts/app';

// Components
import Home from 'ui/home';
import WidgetContainer from 'ui/widget-container';
import UsersContainer from 'ui/users-container';
import PageNotFound from 'ui/pageNotFound';
import Login from 'ui/login';

export default (
       <Route>
        <Route component={Login}>

           <Route path="/" component={Login} />
           <Route path="/widgets" component={WidgetContainer} />
           <Route path="/users" component={UsersContainer} />
           <Route path="/users/1" component={UsersContainer} />
           
        </Route>
        <Route path="*" component={PageNotFound} />
       </Route> 
);