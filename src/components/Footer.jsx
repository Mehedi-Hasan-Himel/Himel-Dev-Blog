import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--primary-variant)] text-center py-6 text-[var(--light)] text-sm">
      <p>© 2025 Mehedi Hasan Himel.</p>
      <div className="mt-3 flex justify-center gap-4 text-lg">
        <a href="https://github.com/Mehedi-Hasan-Himel" className="hover:text-[var(--primary)]" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/mehedi-hasan-himel/" className="hover:text-[var(--primary)]" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://x.com/HIMEL_JS" className="hover:text-[var(--primary)]" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="mailto:mehedihasanhimel89@gmail.com" className="hover:text-[var(--primary)]">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
}