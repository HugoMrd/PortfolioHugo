"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <nav className={`nav ${isScrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <svg
              width="60"
              height="30"
              viewBox="0 0 90.7 42.05"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-svg"
            >
              <g fill="white">
                <path d="M 50.55 41.5 L 51.05 16.45 L 44.6 39.75 L 39.95 39.75 L 33.9 17.1 Q 33.95 23.2 34.125 29.4 Q 34.3 35.6 34.4 41.5 L 26.5 41.5 Q 26.6 36.35 26.65 31.275 Q 26.7 26.2 26.7 21.05 Q 26.7 15.9 26.65 10.825 Q 26.6 5.75 26.5 0.6 L 37.2 0.6 L 42.5 24.05 L 48.45 0.6 L 58.55 0.6 Q 58.4 10.8 58.4 21.05 Q 58.4 31.3 58.55 41.5 L 50.55 41.5 Z M 15.55 0.6 L 24 0.6 Q 23.85 3.75 23.775 6.55 Q 23.7 9.35 23.65 12.075 Q 23.6 14.8 23.575 17.575 Q 23.55 20.35 23.55 23.5 A 1245.301 1245.301 0 0 0 23.556 27.363 A 1587.149 1587.149 0 0 0 23.575 31.55 A 2548.392 2548.392 0 0 0 23.602 35.596 Q 23.617 37.662 23.636 39.95 A 4321.922 4321.922 0 0 0 23.65 41.5 L 15.35 41.5 Q 15.45 38.5 15.5 35.225 Q 15.543 32.411 15.586 28.913 A 3057.737 3057.737 0 0 0 15.6 27.75 L 8.2 27.75 A 773.964 773.964 0 0 0 8.206 30.806 A 946.968 946.968 0 0 0 8.225 34.075 A 1318.013 1318.013 0 0 0 8.256 37.619 A 1731.961 1731.961 0 0 0 8.3 41.5 L 0 41.5 Q 0.05 39.3 0.1 37 Q 0.15 34.7 0.2 32.05 Q 0.25 29.4 0.25 26.25 L 0.25 19.25 L 0.25 13.375 A 429.384 429.384 0 0 0 0.244 11.006 A 323.882 323.882 0 0 0 0.225 8.85 A 330.104 330.104 0 0 1 0.2 5.358 A 299.938 299.938 0 0 1 0.2 4.875 L 0.2 0.6 L 8.65 0.6 Q 8.45 4.75 8.35 8.275 Q 8.25 11.8 8.2 15.4 L 15.6 15.4 L 15.6 11.225 A 256.642 256.642 0 0 0 15.586 8.497 A 226.286 226.286 0 0 0 15.575 7.625 Q 15.55 5.9 15.55 4.225 L 15.55 0.6 Z M 65.118 0.291 A 79.253 79.253 0 0 0 61.15 0.75 Q 61.256 3.247 61.327 6.111 A 435.872 435.872 0 0 1 61.425 11.45 A 910.079 910.079 0 0 1 61.458 14.485 A 1039.119 1039.119 0 0 1 61.5 24 L 61.5 28.45 Q 61.5 30.6 61.475 32.725 Q 61.45 34.85 61.425 37.025 A 403.006 403.006 0 0 1 61.423 37.161 A 438.399 438.399 0 0 1 61.35 41.5 A 89.715 89.715 0 0 0 64.319 41.788 A 67.373 67.373 0 0 0 67.025 41.95 Q 69.6 42.05 70.75 42.05 Q 75.85 42.05 79.6 40.55 A 19.519 19.519 0 0 0 81.016 39.918 A 16.201 16.201 0 0 0 85.825 36.35 A 16.001 16.001 0 0 0 87.376 34.364 A 17.893 17.893 0 0 0 89.5 29.85 A 24.715 24.715 0 0 0 90.341 26.232 A 31.185 31.185 0 0 0 90.7 21.4 Q 90.7 16.65 89.45 12.525 A 21.744 21.744 0 0 0 88.744 10.539 A 17.889 17.889 0 0 0 85.65 5.5 A 17.507 17.507 0 0 0 85.117 4.936 A 14.662 14.662 0 0 0 79.15 1.2 A 23.537 23.537 0 0 0 76.028 0.423 A 28.253 28.253 0 0 0 71.05 0 Q 69.2 0 66.6 0.175 A 68.239 68.239 0 0 0 65.118 0.291 Z M 70.85 8.3 A 8.796 8.796 0 0 0 70.311 8.316 A 6.96 6.96 0 0 0 69.925 8.35 Q 69.5 8.4 69.1 8.45 Q 69.05 10.8 69.05 13.125 L 69.05 17.8 A 116.471 116.471 0 0 0 69.056 18.988 A 139.998 139.998 0 0 0 69.075 20.25 A 2546.322 2546.322 0 0 1 69.123 22.839 A 2768.975 2768.975 0 0 1 69.125 22.925 Q 69.15 24.3 69.2 25.675 Q 69.25 27.05 69.25 28.25 Q 69.7 28.35 70.15 28.375 Q 70.6 28.4 70.95 28.4 Q 72.8 28.4 74.375 27.6 Q 75.95 26.8 77.125 25.425 A 9.817 9.817 0 0 0 78.734 22.767 A 11.412 11.412 0 0 0 78.95 22.2 A 11.705 11.705 0 0 0 79.594 18.642 A 13.348 13.348 0 0 0 79.6 18.25 A 12.863 12.863 0 0 0 79.466 16.435 A 16.483 16.483 0 0 0 79.175 14.925 Q 78.75 13.15 77.725 11.7 A 8.256 8.256 0 0 0 75.557 9.608 A 9.791 9.791 0 0 0 75.025 9.275 A 6.815 6.815 0 0 0 73.078 8.529 Q 72.252 8.343 71.297 8.308 A 12.259 12.259 0 0 0 70.85 8.3 Z" />
              </g>
            </svg>
          </Link>

          <div className="nav-links-wrapper">
            <div className="nav-links">
              <Link href="/" className="btn btn-primary glow-effect">
                Accueil
              </Link>
              <Link href="/portfolio" className="btn btn-primary glow-effect">
                Portfolio
              </Link>
              <Link href="/contact" className="btn btn-secondary glow-effect">
                Contact
              </Link>
              <button
                onClick={handleDownloadCV}
                className="btn btn-cv glow-effect"
              >
                <span className="cv-icon">📄</span>
                <span className="cv-text">Télécharger CV</span>
              </button>
            </div>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <Link
            href="/"
            className="mobile-menu-link btn btn-primary glow-effect"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/portfolio"
            className="mobile-menu-link btn btn-primary glow-effect"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="mobile-menu-link btn btn-secondary glow-effect"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <button
            onClick={() => {
              handleDownloadCV();
              setIsMobileMenuOpen(false);
            }}
            className="mobile-cv-btn"
          >
            <span className="cv-icon">📄</span>
            Télécharger CV
          </button>
        </div>
      </nav>

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
          opacity: 1;
          visibility: visible;
        }

        .nav-scrolled {
          background: rgba(10, 10, 10, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
          z-index: 1001;
        }

        .nav-logo:hover {
          transform: scale(1.05);
        }

        .logo-svg {
          transition: all 0.3s ease;
        }

        .nav-links-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          overflow: hidden;
        }

        .nav-links {
          display: flex;
          gap: 1rem;
          align-items: center;
          min-width: fit-content;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          font-family: inherit;
          white-space: nowrap;
          flex-shrink: 0;
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

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          width: 24px;
          height: 18px;
          position: relative;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: white;
          border-radius: 1px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger span:nth-child(1) {
          position: absolute;
          top: 0;
        }

        .hamburger span:nth-child(2) {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .hamburger span:nth-child(3) {
          position: absolute;
          bottom: 0;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg);
          top: 50%;
          margin-top: -1px;
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 50%;
          margin-bottom: -1px;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .mobile-menu.active {
          display: flex;
          max-height: 300px;
          padding: 1rem 0;
        }

        .mobile-link {
          padding: 1rem 2rem;
          color: white;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }

        .mobile-link:hover {
          background: rgba(102, 126, 234, 0.1);
          border-left-color: #667eea;
        }

        .mobile-cv-btn {
          margin: 0.5rem 2rem;
          padding: 1rem;
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .mobile-cv-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(40, 167, 69, 0.4);
        }

        .mobile-menu-link {
          margin: 0.5rem 2rem;
          padding: 1rem;
          border: none;
          /* width: calc(100% - 4rem); */
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }


        @media (max-width: 1024px) {
          .nav-container {
            padding: 0 1.5rem;
          }

          .btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }

          .nav-links {
            gap: 0.75rem;
          }
        }

        /* Tablets */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1rem;
          }

          .nav-links-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .nav-links-wrapper::-webkit-scrollbar {
            display: none;
          }

          .nav-links {
            gap: 0.5rem;
            padding-right: 1rem;
          }

          .btn {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .cv-text {
            display: none;
          }

          .logo-svg {
            width: 45px;
            height: 22px;
          }
        }

        @media (max-width: 640px) {
          .nav-links-wrapper {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .logo-svg {
            width: 40px;
            height: 20px;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 0.75rem;
          }

          .logo-svg {
            width: 35px;
            height: 17px;
          }

          .mobile-link {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .mobile-cv-btn {
            margin: 0.5rem 1rem;
            padding: 0.75rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 360px) {
          .nav-container {
            padding: 0 0.5rem;
          }

          .logo-svg {
            width: 30px;
            height: 15px;
          }
        }

        @media (max-height: 500px) and (orientation: landscape) {
          .mobile-menu {
            max-height: 200px;
            overflow-y: auto;
          }

          .mobile-link {
            padding: 0.5rem 1rem;
          }

          .mobile-cv-btn {
            margin: 0.25rem 1rem;
            padding: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
