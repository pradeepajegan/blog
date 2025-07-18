"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("blogData"));

    if (!existing || existing.length === 0) {
      const defaultBlogs = [
        { id: 1, title: "Switzerland", image: "/image1.jpg" },
        { id: 2, title: "Paris", image: "/image2.jpg" },
        { id: 3, title: "Dubai", image: "/image3.jpg" },
        { id: 4, title: "Tajmahal", image: "/image4.jpg" },
        { id: 5, title: "Africa", image: "/image5.jpg" },
        { id: 6, title: "Tokyo", image: "/image6.jpg" },
        { id: 7, title: "China", image: "/image7.jpg" },
        { id: 8, title: "Bali", image: "/image8.jpg" },
        { id: 9, title: "Munnar", image: "/image9.jpg" },
        { id: 10, title: "Varkala", image: "/image10.jpg" },
        { id: 11, title: "Ooty", image: "/image11.jpg" },
        { id: 12, title: "China", image: "/image12.jpg" },
        { id: 13, title: "Korea", image: "/image13.jpg" },
        { id: 14, title: "Iceland", image: "/image14.jpg" },
        { id: 15, title: "USA", image: "/image15.jpg" },
      ];
      localStorage.setItem("blogData", JSON.stringify(defaultBlogs));
      setBlogs(defaultBlogs);
    } else {
      setBlogs(existing);
    }
  }, []);

  return (
    <div className="container">
      {blogs.map((blog) => (
        <div key={blog.id} className="card">
          <Link href={`/blog/${blog.id}`}>
            <img src={blog.image} className="image" />
          </Link>
          <h3>{blog.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Blog;
