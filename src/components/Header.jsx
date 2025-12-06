import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="bg-white backdrop-blur border-b border-[var(--primary-variant)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-medium flex items-center gap-2">
          <FontAwesomeIcon icon={faCode} className="text-[var(--primary)]" />
          Himel’s Dev Blog
        </h1>
        <nav className="hidden md:flex gap-8 text-[var(--light)] text-sm">
          <a href="#" className="hover:text-[var(--primary)] transition">Home</a>
          <a href="#" className="hover:text-[var(--primary)] transition">Blog</a>
          <a href="#" className="hover:text-[var(--primary)] transition">Projects</a>
          <a href="#" className="hover:text-[var(--primary)] transition">About</a>
          <a href="mailto:mehedihasanhimel89@gmail.com" className="hover:text-[var(--primary)] transition">Contact</a>
        </nav>
        <button className="md:hidden text-[var(--primary)] text-2xl hover:text-[var(--primary-variant)]">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
}