import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

export default function BlogCard({ blog, onEdit, onDelete }) {
  return (
    <article className="bg-white rounded-2xl shadow-md border border-[var(--primary-variant)] hover:border-[var(--primary)] hover:shadow-xl transition-all duration-300 overflow-hidden">
      {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />}
      <div className="p-6">
        <h4 className="text-xl font-medium text-[var(--primary)] mb-2">{blog.title}</h4>
        <p className="text-[var(--light)] text-sm mb-4 line-clamp-3">{blog.content}</p>
        <div className="flex items-center justify-between text-sm text-[var(--light)] mb-3">
          <span><FontAwesomeIcon icon={faCalendar} /> {blog.date}</span>
          <a href="#" className="text-[var(--primary)] font-medium hover:scale-105 transition">Read more</a>
        </div>
        <p className="text-[var(--light)] text-sm">— {blog.author}</p>
        <div className="flex gap-3 mt-5">
          <button onClick={() => onEdit(blog.id)} className="text-sm px-5 py-2 rounded-full bg-[var(--primary)] text-white hover:border hover:border-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)] transition">
            Edit
          </button>
          <button onClick={() => onDelete(blog.id)} className="text-sm px-5 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}