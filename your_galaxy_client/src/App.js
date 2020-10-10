import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import './App.css'
import PhonesContainer from './containers/PhoneContainer'
import PostsContainer from './containers/PostContainer'
import NavBar from './components/navbar/NavBar'
import SignUp from './components/user/SignUp';
import Login from './components/user/Login';
import Welcome from './components/Welcome'

const App = () => {

    return (
      <Router>
        <div>
         <NavBar />
         <PhonesContainer />
         <PostsContainer />
         <Switch>
           <Route exact path='/welcome' component={Welcome} />
         </Switch>
        </div>
      </Router>
    )}

export default App;
