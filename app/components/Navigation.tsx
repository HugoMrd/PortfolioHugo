"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = async () => {
    try {
      const response = await fetch("/cv.pdf");
      if (!response.ok) {
        console.error("Fichier non trouvé:", response.status);
        alert(
          `Le CV n'est pas accessible (erreur ${response.status}). Vérifiez que le fichier existe dans public/`
        );
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV_HugoMouraud.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors du téléchargement:", error);
      alert(
        "Erreur lors du téléchargement du CV. Consultez la console pour plus de détails."
      );
    }
  };
  return (
    <nav className={`nav ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <span className="gradient-text">HM</span>
        </Link>

        <div className="nav-links">
          <a href="/ " className="btn btn-primary glow-effect">
            Accueil
          </a>
          <a href="/portfolio" className="btn btn-primary glow-effect">
            Portfolio
          </a>
          <a href="/contact" className="btn btn-secondary glow-effect">
            Contact
          </a>
          <button onClick={handleDownloadCV} className="btn btn-cv glow-effect">
            <span className="cv-icon">📄</span>
            Télécharger CV
          </button>
        </div>
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          background: rgba(10, 10, 10, 0.1);
          backdrop-filter: blur(10px);
        }

        .nav-scrolled {
          background: rgba(10, 10, 10, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-cv {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-cv:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(40, 167, 69, 0.4);
        }

        .cv-icon {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 0.5rem;
          }

          .btn {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .nav-container {
            padding: 0 1rem;
          }

          .btn-cv {
            gap: 0.3rem;
          }

          .cv-icon {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </nav>
  );
}
