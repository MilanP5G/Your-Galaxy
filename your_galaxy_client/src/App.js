import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import './App.css'
import PhonesContainer from './containers/PhoneContainer'
import PhoneForm from './components/phone/PhoneForm'
import PostsContainer from './containers/PostContainer'
import NavBar from './components/navbar/NavBar'
import Home from './components/Home'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
         <NavBar />
         <PostsContainer />
         <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/phones/add' component={PhoneForm} />
           <Route exact path='/phones' component={PhonesContainer} />
         </Switch>
        </div>
      </Router>
    )}
  }

export default App;
