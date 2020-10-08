import React, { Component } from 'react'
import Posts from '../components/communities/posts/Posts'
import PostShow from '../components/communities/comments/PostShow'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/PostAction'

class PostsContainer extends Component {

  componentDidMount(){
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
       <Switch>
        <Route exact path='/community' render={(props) => <Posts {...props} posts={this.props.posts} />} />
        <Route exact path='/posts/:id' render={(props) => <PostShow {...props} posts={this.props.posts}/>} />
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({ posts })
//
// const mapDispatchToProps = dispatch => ({
//   addPhone: payload => dispatch({ type: 'ADD_PHONE', payload }),
//   deletePhone: id => dispatch({ type: 'DELETE_PHONE', id }),
//   fetchPhones
// })


export default connect(mapStateToProps, { fetchPosts })(PostsContainer)
