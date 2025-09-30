import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/blogs.json').then(res => res.json()).then(data => {
        const found = data.find(b => b.id === parseInt(id));
        setBlog(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;
  if (!blog) return <p className="text-center py-20">Blog not found</p>;

  return (
    <>
      <Navbar />
      <article className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {blog.title}
        </h1>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-96 object-contain rounded-lg mb-6 shadow-lg"
        />
        <p className="prose prose-lg text-gray-700">{blog.content}</p>
      </article>
    </>
  );
};

export default BlogDetails;
