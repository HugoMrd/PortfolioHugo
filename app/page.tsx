/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hero-badge"
            >
              <span className="badge-icon">🎓 </span>
              Étudiant en 5ᵉ année à Epitech • Master IT Management TUD Dublin
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Bonjour ! je suis{" "}
              <span className="gradient-text">Hugo Mouraud</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Développeur Full Stack passionné par les technologies modernes
              <br />
              et la création d&apos;expériences utilisateur innovantes. Grand
              amateur de sport,
              <br />
              je pratique la musculation quotidiennement et m&apos;intéresse à
              tout ce qui touche à la performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-highlights"
            >
              <div className="highlight-card gympartner-card">
                <span className="highlight-icon">📱</span>
                <div className="highlight-content">
                  <h3>Projet actuel</h3>
                  <p>
                    Application de musculation (Projet de fin d&apos;études)
                  </p>
                </div>
                <div className="gympartner-logo">
                  <img
                    src="logogympartner.png"
                    alt="GymPartner Logo"
                    className="logo-image"
                  />
                </div>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">💪</span>
                <div className="highlight-content">
                  <h3>Passionné de sport</h3>
                  <p>Musculation quotidienne & running régulier</p>
                </div>
              </div>
              <div className="highlight-card tud-card">
                <span className="highlight-icon">🌍</span>
                <div className="highlight-content">
                  <h3>Formation internationale</h3>
                  <p>Master 1 IT Management à Dublin (TUD)</p>
                </div>
                <div className="tud-logo">
                  <img
                    src="https://www.drive0.eu/wp-content/uploads/2019/09/Dublin-Institute-of-Technology-DIT-IE.jpg"
                    alt="TU Dublin Logo"
                    className="logo-image"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hero-skills"
            >
              <div className="skills-section">
                <h4 className="skills-title">Stack technique</h4>
                <div className="skills-grid">
                  <div className="skill-tag featured">React</div>
                  <div className="skill-tag featured">TypeScript</div>
                  <div className="skill-tag">Next.js</div>
                  <div className="skill-tag">Vue.js</div>
                  <div className="skill-tag">React Native</div>
                  <div className="skill-tag">Flutter</div>
                  <div className="skill-tag">Node.js</div>
                  <div className="skill-tag">Python</div>
                  <div className="skill-tag">C</div>
                  <div className="skill-tag">StoryBook</div>
                  <div className="skill-tag">PHP</div>
                  <div className="skill-tag">MongoDB</div>
                  <div className="skill-tag">Firebase</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="hero-stats"
            >
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Années d&apos;expérience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projets réalisés</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Stages/Missions</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .section {
          min-height: 100vh;
          padding: 8rem 2rem 4rem 2rem;
          position: relative;
          overflow-y: auto;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          padding: 0;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.1) 0%,
            rgba(118, 75, 162, 0.1) 100%
          );
          border: 1px solid rgba(102, 126, 234, 0.3);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          font-size: 1.2rem;
        }

        .hero-title {
          font-size: 3.8rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #667eea 50%,
            #764ba2 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #b0b0b0;
          margin-bottom: 3rem;
          line-height: 1.6;
          font-weight: 400;
        }

        .hero-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .highlight-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.08) 0%,
            rgba(118, 75, 162, 0.08) 100%
          );
          border: 1px solid rgba(102, 126, 234, 0.2);
          padding: 1.5rem;
          border-radius: 20px;
          backdrop-filter: blur(15px);
          transition: all 0.4s ease;
          text-align: left;
          margin-bottom: 1rem;
          position: relative;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.4);
        }

        .tud-card,
        .gympartner-card {
          justify-content: space-between;
        }

        .tud-card .highlight-content,
        .gympartner-card .highlight-content {
          text-align: left;
          flex: 1;
        }

        .tud-logo,
        .gympartner-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 60px;
          height: 60px;
          background: transparent;
          border-radius: 12px;
          padding: 0.5rem;
          flex-shrink: 0;
        }

        .logo-image {
          width: 50px;
          height: 50px;
          object-fit: cover;
          filter: brightness(1.1);
          border-radius: 50%;
          border: 2px solid rgba(102, 126, 234, 0.3);
        }

        .highlight-icon {
          font-size: 2rem;
          min-width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 15px;
          flex-shrink: 0;
        }

        .highlight-content h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
        }

        .highlight-content p {
          font-size: 0.95rem;
          color: #b0b0b0;
          margin: 0;
          line-height: 1.4;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 6rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.05rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s ease;
        }

        .btn:hover::before {
          left: 100%;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: #667eea;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .btn-icon {
          font-size: 1.1rem;
        }

        .hero-skills {
          margin-bottom: 4rem;
        }

        .skills-section {
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.05) 0%,
            rgba(118, 75, 162, 0.05) 100%
          );
          border: 1px solid rgba(102, 126, 234, 0.15);
          border-radius: 25px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .skills-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .skill-tag {
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.15) 0%,
            rgba(118, 75, 162, 0.15) 100%
          );
          border: 1px solid rgba(102, 126, 234, 0.3);
          color: #ffffff;
          padding: 0.8rem 1.6rem;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .skill-tag.featured {
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.25) 0%,
            rgba(118, 75, 162, 0.25) 100%
          );
          border-color: rgba(102, 126, 234, 0.5);
          font-weight: 700;
        }

        .skill-tag::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(102, 126, 234, 0.3),
            transparent
          );
          transition: left 0.6s ease;
        }

        .skill-tag:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(102, 126, 234, 0.3);
          border-color: rgba(102, 126, 234, 0.6);
        }

        .skill-tag:hover::before {
          left: 100%;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-top: 5rem;
        }

        .stat-item {
          text-align: center;
          margin-top: 1rem;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-label {
          display: block;
          font-size: 0.9rem;
          color: #b0b0b0;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .section {
            padding: 6rem 1rem 3rem 1rem;
          }

          .hero-title {
            font-size: 2.8rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .hero-highlights {
            gap: 2.5rem;
            margin-top: 2rem;
            margin-bottom: 3rem;
          }

          .tud-card,
          .gympartner-card {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .tud-logo,
          .gympartner-logo {
            align-self: center;
          }

          .hero-buttons {
            gap: 2rem;
            margin-top: 4rem;
            margin-bottom: 3rem;
          }

          .btn {
            width: 100%;
            max-width: 320px;
          }

          .hero-stats {
            gap: 2rem;
            flex-wrap: wrap;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: 5rem 1rem 2rem 1rem;
          }

          .hero-content {
            margin-bottom: 3rem;
            padding: 2rem;
          }

          .hero-title {
            font-size: 2.2rem;
            padding: 5rem;
          }

          .highlight-card {
            padding: 1.2rem;
          }

          .skills-section {
            padding: 2.5rem;
          }

          .hero-stats {
            gap: 1.5rem;
          }

          .tud-logo,
          .gympartner-logo {
            width: 50px;
            height: 50px;
          }

          .logo-image {
            width: 40px;
            max-height: 40px;
          }
        }
      `}</style>
    </>
  );
}
