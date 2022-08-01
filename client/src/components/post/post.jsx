import { Link } from "react-router-dom"
import "./post.css"
export default function post({post}) {
  const PF="localhost:5000/images";
  return (
    <div className='post'>
      {post.photo && (
      <img className="postImg"
      src="{PF+post.photo}" alt="" />
      )}
      <div className="postInfo">
        <div className="postCat">
          {post.categories.map(c=>(
     <span className="postsCat">{c.name}</span>
          ))}
        </div>
        <Link className="Link" to={`/post/${post._id}`}>
        <span className="postTitle">{post.title} </span>

        </Link>
      <hr/>
      <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDec">
        {post.desc}
      </p>
    </div>
  )
}
