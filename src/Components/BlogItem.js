import React from 'react';

const BlogItem = ({ blog, index, onEdit, onDelete }) => {
  return (
    <div className="blog-item">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <p><em>{blog.date}</em></p> {/* Display the date */}
      <button onClick={() => onEdit(index)}>Edit</button>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
};

export default BlogItem;
