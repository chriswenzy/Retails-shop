import React, { Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Assets/css/styles.scss';
import './Assets/js/main';
import { Home } from './Pages/Auth/Home';
import { Login } from './Pages/Auth/Login';
import { Register } from './Pages/Auth/Register';
import { Nofile } from './Pages/Auth/Nofile';
import {First_login} from './Pages/Auth/First_login';
import {Reset_password} from './Pages/Auth/Reset_password';
import {Forget_password} from './Pages/Auth/Forget_password';
import { Welcome } from './Pages/Auth/Welcome_page';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import {Provider as AlertProvider} from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
import {AuthProvider} from './Context/AuthContext';
import {ExternalRoute,InternalRoute} from './Component/Auth.route';
import { Profile } from "./Pages/Dashboard/Profile/Profile";
import { EditProfile } from "./Pages/Dashboard/Profile/Edit-profile";
import {Notifications} from "./Pages/Dashboard/Notification/Notification";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AlertProvider template={AlertTemplate} position={"top right"}>
        <AuthProvider>
          <Router>
            <Switch>

              <Route exact path="/" component={Home} />
              <ExternalRoute path="/Login" component={Login} />
              <ExternalRoute path="/Register" component={Register} />
              <ExternalRoute path="/Forget-password/:token" component={Forget_password} />
              <ExternalRoute path="/Reset-password" component={Reset_password} />
              <Route path="/First-login" component={First_login} />
              <Route path="/Welcome" component={Welcome}/>
              <ExternalRoute path="/Dashboard" component={Dashboard}  />
              <ExternalRoute  path="/Profile" component={Profile} />
              <ExternalRoute path="/Edit-profile" component={EditProfile}  />
              <ExternalRoute path="/Notification" component={Notifications} />
              <Route component={Nofile} />

            </Switch>
          </Router>
          </AuthProvider>
          </AlertProvider>
      </React.Fragment>
    );
  }
}


export default App;
