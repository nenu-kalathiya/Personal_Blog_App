import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogs, onEdit, onDelete }) => {
  return (
    <div>
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <BlogItem
            key={index}
            blog={blog}
            index={index}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No blog posts available</p>
      )}
    </div>
  );
};

export default BlogList;
