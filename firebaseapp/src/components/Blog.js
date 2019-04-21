import React from 'react'
import moment from "moment"

const Blog = ({blog}) => {
    const {title, content, createdAt} = blog
    const date = moment(createdAt.toDate()).calendar()
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>
      <p>{date}</p>
    </div>
  )
}

export default Blog