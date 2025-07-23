/* eslint-disable @next/next/no-img-element */
// app/portfolio/page.tsx
"use client";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";

const projects = [
  {
    id: 1,
    title: "GymPartner",
    description: "GymPartner est une app qui crée des programmes de muscu et nutrition sur mesure, avec un avatar évolutif pour lutter contre la démotivation",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop",
    tech: ["React-native", "Typscript", "MongoDB", "C++", "StoryBook", "DevOps"],
    link: "#",
  },
  {
    id: 2,
    title: "Bot Supreme",
    description:
      "Développement d'un bot automatisé ultra-rapide visant à acheter des articles lors de leur mise en vente sur le site Supreme afin de les acquérir avant les autres clients. (Mis en vente)",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&h=300&fit=crop",
    tech: ["Python", "Selenium", "Playwright"],
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <AnimatedBackground />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="portfolio-header"
        >
          <h1 className="page-title gradient-text">Mon Portfolio</h1>
          <p className="page-subtitle">
            Découvrez une sélection de mes projets les plus récents
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    Voir le projet
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-page {
          min-height: 100vh;
          padding: 8rem 0 4rem;
        }

        .portfolio-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .page-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: #b0b0b0;
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          margin-top: 1rem;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-link {
          color: white;
          text-decoration: none;
          padding: 0.75rem 1.5rem;
          border: 2px solid #667eea;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: #667eea;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white;
        }

        .project-description {
          color: #b0b0b0;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(102, 126, 234, 0.2);
          color: #667eea;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .portfolio-page {
            padding: 6rem 0 2rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}