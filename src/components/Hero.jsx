import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section className="text-center space-y-6 bg-[var(--primary-variant-2)] border border-[var(--primary-variant)] p-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl lg:text-4xl md:text-5xl font-semibold text-[var(--primary)]">
        Exploring My Path as a Web Developer
      </h2>
      <p className="text-[var(--primary)] max-w-2xl mx-auto text-lg">
        Sharing my experiences, tutorials, and lessons from building real-world projects from WordPress design to full-stack development and C++ problem-solving. I write to learn, grow, and help others craft modern, meaningful web experiences.
      </p>
      <a href="#" className="inline-block bg-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)] hover:border hover:border-[var(--primary)] text-white px-6 py-3 rounded-full font-medium transition duration-300">
        <FontAwesomeIcon icon={faArrowRight} /> Read Latest Posts
      </a>
    </section>
  );
}