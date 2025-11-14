import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const { blogs } = useLoaderData();

  return (
    <ul>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))
      ) : (
        <li>No blobs found</li>
      )}
    </ul>
  );
};

export default Blog;

export const loaderBlogs = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await data.json();
  return { blogs };
};
