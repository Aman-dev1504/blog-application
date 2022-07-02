import "./posts.css"
import Post from "../post/post"

export default function posts({post}) {
  return (
    <div className="posts">
      {  post.map(p=>(
          <Post post={p}/>
        ))
}
    </div>
  );
}
