export default function EditModal({ blog, onUpdate, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target['edit-title'].value;
    const author = e.target['edit-author'].value;
    const content = e.target['edit-content'].value;
    const image = e.target['edit-image'].value || blog.image;

    onUpdate({ ...blog, title, author, content, image });
  };

  return (
    <div id="edit-modal" className="fixed inset-0 backdrop-blur-md bg-black/20 flex justify-center items-center z-50 transition-all duration-300">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[var(--primary-variant)] w-full max-w-md">
        <h3 className="text-2xl font-semibold text-[var(--primary)] mb-6">Edit Article</h3>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input id="edit-title" type="text" defaultValue={blog.title} className="w-full px-4 py-3 rounded-xl border border-[var(--primary-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" required />
          <input id="edit-author" type="text" defaultValue={blog.author} className="w-full px-4 py-3 rounded-xl border border-[var(--primary-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" required />
          <textarea id="edit-content" defaultValue={blog.content} className="w-full px-4 py-3 rounded-xl border border-[var(--primary-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none" rows="5" required />
          <input id="edit-image" type="text" placeholder="Image URL (optional)" defaultValue={blog.image} className="w-full px-4 py-3 rounded-xl border border-[var(--primary-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
          <div className="flex justify-end gap-4 mt-4">
            <button type="button" onClick={onClose} className="inline-block px-6 py-3 rounded-full border border-[var(--primary)] text-[var(--primary)] font-medium transition-all duration-300 hover:bg-[var(--primary)] hover:text-white">
              Cancel
            </button>
            <button type="submit" className="inline-block px-6 py-3 rounded-full bg-[var(--primary)] text-white font-medium transition-all duration-300 hover:border border-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)]">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}