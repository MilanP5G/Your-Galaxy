import React, { Component } from 'react'
import Posts from '../components/communities/posts/Posts'
import PostShow from '../components/communities/comments/PostShow'
import PostForm from '../components/communities/posts/PostForm'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/PostAction'
import { fetchComments } from '../actions/CommentAction'

class PostsContainer extends Component {

  componentDidMount(){
    this.props.fetchPosts()
    this.props.fetchComments()
  }

  render() {
    return (
      <div>
       <Switch>
        <Route exact path='/posts/add' component={PostForm} />
        <Route exact path='/posts/:id' render={(props) => <PostShow {...props} posts={this.props.posts} comments={this.props.comments}/>} />
        <Route exact path='/report' render={(props) => <Posts {...props} posts={this.props.posts} />} />
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ posts, comments }) => ({ posts, comments })

export default connect(mapStateToProps, { fetchPosts, fetchComments })(PostsContainer)
