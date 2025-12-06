export default function BlogForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title').trim();
    const author = formData.get('author').trim() || 'Mehedi Hasan Himel';
    const content = formData.get('content').trim();
    const image = formData.get('image').trim();

    if (title && content) {
      onAdd({ title, author, content, image });
      e.target.reset();
    }
  };

  return (
    <div className="border border-[var(--primary-variant)] rounded-md p-4 my-4">
      <form id="add-blog-form" onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input name="title" type="text" placeholder="Blog title" className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--primary-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--light)]" required />
        <input name="author" type="text" placeholder="Author" className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--primary-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--light)]" />
        <textarea name="content" placeholder="Blog content" className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--primary-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--light)]" rows="5" required />
        <input name="image" type="text" placeholder="Image URL (optional)" className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--primary-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--light)]" />
        <button type="submit" className="bg-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)] hover:border hover:border-[var(--primary)] text-white px-6 py-3 rounded-full font-medium transition duration-300 self-end">
          Add New Blog
        </button>
      </form>
    </div>
  );
}