import React, { useState } from "react";
import "./BlogBody.css";
import { AboutMe } from "./AboutMe";
import { UsersBlogs } from "./UsersBlogs";

export const BlogBody = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    id: "",
    title: "",
    category: "life",
    date: new Date().toISOString().slice(0, 16),
    content: "",
    img: "",
  });

  const deleteBlog = (id) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  const handleForm = (e) => {
    e.preventDefault();
    setBlogs([...blogs, newBlog]);
    setNewBlog({
      id: "",
      title: "",
      category: "",
      date: new Date().toISOString().slice(0, 16),
      content: "",
      img: "",
    });
  };

  const formatDate = (dateString) => {
    const currentDate = new Date();
    const postDate = new Date(dateString);
    let timeDifference = currentDate - postDate;

    if (timeDifference < 0) {
      timeDifference = 0; // Set to 0 if the date is in the future
    }

    // Calculate time units
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    // Format the output
    if (seconds < 60) {
      return `Posted: ${seconds === 1 ? "1 sec" : `${seconds} secs`} ago`;
    } else if (minutes < 60) {
      return `Posted: ${minutes === 1 ? "1 min" : `${minutes} mins`} ago`;
    } else {
      return `Posted: ${hours === 1 ? "1 hour" : `${hours} hours`} ago`;
    }
  };

  return (
    <div className="blog-body">
      <img
        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="BlogImg"
        className="blog-image"
      />
      <div className="blog-content">
        <UsersBlogs
          blogs={blogs}
          formatDate={formatDate}
          deleteBlog={deleteBlog}
        />
        <AboutMe />
      </div>

      <form onSubmit={handleForm}>
        <h2 className="Blogh2">Add new Blog</h2>
        <label htmlFor="blog">Choose a Category</label>
        <select
          name="category"
          value={newBlog.category}
          onChange={(e) =>
            setNewBlog({
              ...newBlog,
              category: e.target.value,
            })
          }
        >
          <option value="life">Life</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="style">Style</option>
          <option value="tech">Tech</option>
          <option value="cinema">Cinema</option>
        </select>

        <label htmlFor="title">Enter a Title</label>
        <input
          type="text"
          name="title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />

        <label htmlFor="img">Enter Image URL</label>
        <input
          type="text"
          name="img"
          value={newBlog.img}
          onChange={(e) =>
            setNewBlog({
              ...newBlog,
              img: e.target.value,
            })
          }
        />

        <textarea
          className="blog-textarea"
          value={newBlog.content}
          cols="30"
          rows="10"
          onChange={(e) =>
            setNewBlog({
              ...newBlog,
              content: e.target.value,
            })
          }
        ></textarea>
        <button type="submit">Add new Blog</button>
      </form>
    </div>
  );
};
