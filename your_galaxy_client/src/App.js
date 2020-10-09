import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import './App.css'
import PhonesContainer from './containers/PhoneContainer'
import PostsContainer from './containers/PostContainer'
import NavBar from './components/navbar/NavBar'
import Home from './components/Home'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
         <NavBar />
         <PhonesContainer />
         <PostsContainer />
         <Switch>
           <Route exact path='/' component={Home} />
         </Switch>
        </div>
      </Router>
    )}
  }

export default App;
