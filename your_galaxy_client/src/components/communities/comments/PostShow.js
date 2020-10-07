import React from 'react'
import { useParams } from 'react-router-dom'
import '../../../styling/Post.css'

const PostShow = ({ posts }) => {
  const { postId } = useParams();

  console.log(postId)


  if (posts.length === 0) return null;
  const post = posts.find((posts) => posts.post_id === parseInt(postId))

  return (
    <div className='post-show'>
      {post.title}
      {post.content}
    </div>
  )

}


export default PostShow
