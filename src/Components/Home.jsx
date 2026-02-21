import { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  function handlePost() {
    setTitle('');
    setDescription('');
    if (title && description) {
      setBlogPosts(prev => [...prev, { title, description }]);
    }
  }
  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
        <button data-testid="create-button" className="mt-10" onClick={handlePost}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay blogPosts={blogPosts} setBlogPosts={setBlogPosts} />
      </div>
    </div>
  );
}

export default Home;

