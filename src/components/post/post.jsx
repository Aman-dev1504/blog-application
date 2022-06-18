import "./post.css"

export default function post() {
  return (
    <div className='post'>
      <img className="postImg"
      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      <div className="postInfo">
        <div className="postCat">
          <span className="postsCat">MERN</span>
          <span className="postsCat">Web Development</span>
        </div>
        <span className="postTitle">Best Roadmap to learn MERN Stack in 2022</span>
      <hr/>
      <span className="postDate">1 Hour ago</span>
      </div>
      <p className="postDec">
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Beatae obcaecati laudantium cumque consequuntur quasi porro laborum! 
        Debitis quibusdam, repudiandae quos neque, nulla doloremque optio delectus mollitia ipsa reiciendis incidunt minus?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dignissimos nemo deserunt unde eaque, quia ipsam cum placeat doloribus minus ipsa veritatis non rerum, inventore, eum nostrum dolores velit nesciunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odio consequatur doloremque amet culpa praesentium, modi sapiente suscipit, quis nobis in? Architecto enim fugit rerum fugiat voluptatibus velit nisi ipsum.
      </p>
    </div>
  )
}
