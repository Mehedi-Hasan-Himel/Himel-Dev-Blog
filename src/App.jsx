import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import EditModal from './components/EditModal';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Web Design",
      content: "From WordPress to Modern Web: My Transition Journey...",
      author: "Mehedi Hasan Himel",
      date: "Oct 20, 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Competitive Programming",
      content: "Solving My First 20 Problems in C++...",
      author: "Mehedi Hasan Himel",
      date: "Oct 14, 2025",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Development Setup",
      content: "Building My Portfolio with HTML and CSS...",
      author: "Mehedi Hasan Himel",
      date: "Sep 30, 2025",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
    }
  ]);
  const [editingBlog, setEditingBlog] = useState(null);

  const addBlog = (newBlog) => {
    setBlogs([{ ...newBlog, id: Date.now(), date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }, ...blogs]);
  };

  const updateBlog = (updatedBlog) => {
    setBlogs(blogs.map(b => b.id === updatedBlog.id ? updatedBlog : b));
    setEditingBlog(null);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(b => b.id !== id));
  };

  const openEdit = (id) => {
    setEditingBlog(blogs.find(b => b.id === id));
  };

  return (
    <div className="antialiased">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        <Hero />
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-[var(--primary)]">Latest Articles</h3>
            <a href="#" className="text-[var(--primary)] hover:text-[var(--primary-variant)] text-sm">View all posts →</a>
          </div>
          <BlogForm onAdd={addBlog} />
          <BlogList blogs={blogs} onEdit={openEdit} onDelete={deleteBlog} />
        </section>
        <About />
        <Newsletter />
      </main>
      <Footer />
      {editingBlog && <EditModal blog={editingBlog} onUpdate={updateBlog} onClose={() => setEditingBlog(null)} />}
    </div>
  );
}