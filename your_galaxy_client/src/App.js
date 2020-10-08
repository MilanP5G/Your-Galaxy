import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import './App.css'
import PhonesContainer from './containers/PhoneContainer'
import PhoneForm from './components/phone/PhoneForm'
import PostsContainer from './containers/PostContainer'
import PostForm from './components/communities/posts/PostForm'
import NavBar from './components/navbar/NavBar'
import Home from './components/Home'
import PostShow from './components/communities/comments/PostShow'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
         <NavBar />
         <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/phones/add' component={PhoneForm} />
           <Route exact path='/phones' component={PhonesContainer} />
           <Route exact path='/posts/add' component={PostForm} />
           <Route exact path='/community' component={PostsContainer} />
           <Route exact path='/posts/:id' render={(props) => <PostShow {...props} posts={this.props.posts}/>} />
         </Switch>
        </div>
      </Router>
    )}
  }

export default App;
