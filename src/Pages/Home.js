import React, { useState } from 'react';
import BlogForm from '../Components/BlogForm';
import BlogList from '../Components/BlogList';
import Header from '../Components/Header';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(null);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const updateBlog = (updatedBlog) => {
    const updatedBlogs = blogs.map((blog, index) =>
      index === currentBlogIndex ? updatedBlog : blog
    );
    setBlogs(updatedBlogs);
    setCurrentBlogIndex(null);
  };

  const handleDelete = (index) => {
    setBlogs(blogs.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setCurrentBlogIndex(index);
  };

  return (
    <div>
      <Header />
      <BlogForm
        onSubmit={currentBlogIndex !== null ? updateBlog : addBlog}
        editBlog={currentBlogIndex !== null ? blogs[currentBlogIndex] : null}
      />
      <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
