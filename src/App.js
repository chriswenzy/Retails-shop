import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Assets/css/styles.scss';
import './Assets/js/main'

import { Home } from './Pages/Auth/Home';
import { Login } from './Pages/Auth/Login';
import { Register } from './Pages/Auth/Register';
import { Nofile } from './Pages/Auth/Nofile';
import {First_login} from './Pages/Auth/First_login';
import {Reset_password} from './Pages/Auth/Reset_password';
import { Welcome } from './Pages/Auth/Welcome_page';
import { Dashboard } from './Pages/Dashboard/Dashboard'
import {Layout} from './Component/Layouts/Layout'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        
          <Router>
            <Switch>

              <Route exact path="/" component={Home} />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/First-login" component={First_login} />
              <Route path="/Reset-password" component={Reset_password} />
              <Route path="/Welcome" component={Welcome}/>
              <Route path="/Dashboard" component={Dashboard}  />
              <Route component={Nofile} />

            </Switch>
          </Router>
      
      </React.Fragment>
    );
  }
}


export default App;
