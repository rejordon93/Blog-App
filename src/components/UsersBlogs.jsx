import React, { useState } from "react";
import "./UsersBlogs.css";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

export const UsersBlogs = ({ blogs, formatDate, deleteBlog }) => {
  return (
    <div className="blog-cards">
      <div className="cardh2">
        <hr />
        <h2>Users Blogs</h2>
        <hr />
      </div>
      <div className="blog-card">
        <img
          src="https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="man with guitar"
        />
        <h4>Music: Life</h4>
        <h2>Lorem, ipsum dolor sit amet</h2>
        <h4>Posted: 4 hour ago</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, unde?
          Deleniti dolor error est consectetur placeat ea incidunt, eveniet
          nulla eos magnam at maiores quia nihil illum officia praesentium
          optio.
        </p>
      </div>
      <div className="blog-card">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="man with guitar"
        />
        <h4>Music: Life</h4>
        <h2>Lorem, ipsum dolor sit amet</h2>
        <h4>Posted: 3 hour ago</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, unde?
          Deleniti dolor error est consectetur placeat ea incidunt, eveniet
          nulla eos magnam at maiores quia nihil illum officia praesentium
          optio.
        </p>
      </div>
      {/* Bottom Two Cards */}
      <div className="blog-card">
        <img
          src="https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="man with guitar"
        />
        <h4>Life: Life</h4>
        <h2>Lorem, ipsum dolor sit amet</h2>
        <h4>Posted: 2 hour ago</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, unde?
          Deleniti dolor error est consectetur placeat ea incidunt, eveniet
          nulla eos magnam at maiores quia nihil illum officia praesentium
          optio.
        </p>
      </div>
      <div className="blog-card">
        <img
          src="https://images.unsplash.com/photo-1449825457024-24da8ff1e863?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="man with guitar"
        />
        <h4>Music: Life</h4>
        <h2>Lorem, ipsum dolor sit amet</h2>
        <h4>Posted: 1 hour ago</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, unde?
          Deleniti dolor error est consectetur placeat ea incidunt, eveniet
          nulla eos magnam at maiores quia nihil illum officia praesentium
          optio.
        </p>
      </div>
      {/* Blog cards from the map function */}
      <div className="blog-cards-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.img} alt="img" />
            <div className="blogContent">
              <p>Category: {blog.category}</p>
              <h3>Title: {blog.title}</h3>
              <p> {formatDate(blog.date)}</p>
              <p>{blog.content}</p>
              <Button positive>Like</Button>
              <Button onClick={() => deleteBlog(blog.id)} negative>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
