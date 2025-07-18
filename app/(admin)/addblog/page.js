"use client";
import { useEffect, useState } from "react";

const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogData")) || [];
    setBlogs(savedBlogs);
  }, []);

  const addBlog = () => {
    if (title.trim() === "" || image.trim() === "") return;

    const newBlog = {
      id: Date.now(),
      title,
      image,
    };

    const updatedBlogs = [...blogs, newBlog];
    localStorage.setItem("blogData", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
    setTitle("");
    setImage("");
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    localStorage.setItem("blogData", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  return (
    <div className="add-main">
      <div className="add-header">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={addBlog}>Add Blog</button>
      </div>

      <div className="add-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="add-card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBlog;
