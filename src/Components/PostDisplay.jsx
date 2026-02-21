import React from "react";

function PostDisplay({ blogPosts, setBlogPosts }) {
function handleDelete(index){
  if(blogPosts.length !== 0){
    setBlogPosts(prev => prev.filter((_ , i) => i !== index))
  }
}
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {
        blogPosts.map((post , index) => {
          return <div key={index} className="post-box">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button onClick={() => {handleDelete(index)}}>Delete</button>
          </div>
        })
      }
    </div>
  );
}

export default PostDisplay;
