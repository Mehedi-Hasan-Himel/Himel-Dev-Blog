export default function Newsletter() {
  return (
    <section className="bg-white border border-[var(--primary-variant)] rounded-2xl p-8 text-center space-y-4 shadow-lg">
      <h3 className="text-2xl font-semibold text-[var(--primary)]">Subscribe to My Newsletter</h3>
      <p className="text-[var(--light)]">Get updates about new articles, projects, and coding tips directly in your inbox.</p>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
        <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--primary-variant)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-[var(--light)]" />
        <button type="submit" className="bg-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)] hover:border hover:border-[var(--primary)] px-6 py-3 rounded-full text-white font-medium transition duration-300">
          Subscribe
        </button>
      </form>
    </section>
  );
}