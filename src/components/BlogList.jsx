import BlogCard from './BlogCard';

export default function BlogList({ blogs, onEdit, onDelete }) {
  return (
    <div id="blog-list" className="grid md:grid-cols-3 gap-8">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}