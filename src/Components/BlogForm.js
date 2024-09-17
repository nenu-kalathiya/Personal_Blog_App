import React, { useState, useEffect } from 'react';

const BlogForm = ({ onSubmit, editBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editBlog) {
      setTitle(editBlog.title);
      setContent(editBlog.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    onSubmit({
      title,
      content,
    });

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Blog Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={content}
        placeholder="Blog Content"
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{editBlog ? 'Update Blog' : 'Create Blog'}</button>
    </form>
  );
};

export default BlogForm;
