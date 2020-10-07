import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const PostShow = ({ posts }) => {
  const { postId } = useParams();

  if (posts.length === 0) return null;
  const post = posts.find((posts) => posts.post_id === parseInt(postId))

  return (
    <div>
      {post.title}
      {post.content}
    </div>
  )

}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(PostShow)
