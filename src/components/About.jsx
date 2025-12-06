import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../assets/aboutImage.png";

export default function About() {
  return (
    <section className="bg-white border border-[var(--primary-variant)] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 h-fit">
      <img
        src={aboutImage}
        alt="Himel"
        className="rounded-full border-4 border-[var(--primary)]"
      />
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-[var(--primary)]">
          Hey, I’m Mehedi Hasan Himel
        </h3>
        <p className="text-[var(--light)] mb-4 text-justify">
          I’m currently focusing on problem solving and aiming to become a
          skilled competitive programmer. Alongside that, I’m learning the MERN
          Stack to strengthen my Full-Stack Development skills and expand my
          understanding of modern web technologies. Previously, I worked as a
          WordPress Web Designer at SM Technology and Aurwave, where I designed
          and developed user-friendly website tailored to client I’m passionate
          about continuous learning, coding challenges, and building efficient
          solutions. Excited to keep improving, take on new challenges, and grow
          as a Software Engineer. Let’s connect and collaborate on something
          amazing!
        </p>
        <div className="flex gap-5 text-xl text-[var(--light)]">
          <a
            href="https://github.com/Mehedi-Hasan-Himel"
            className="hover:text-[var(--primary)] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/mehedi-hasan-himel/"
            className="hover:text-[var(--primary)] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://x.com/HIMEL_JS"
            className="hover:text-[var(--primary)] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="mailto:mehedihasanhimel89@gmail.com"
            className="hover:text-[var(--primary)] transition"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </section>
  );
}
