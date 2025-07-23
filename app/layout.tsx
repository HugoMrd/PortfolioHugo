import './globals.css'
import type { Metadata } from 'next'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: 'Hugo Mouraud - Portfolio',
  description: 'Développeur Full Stack passionné',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              background: #0a0a0a; 
              color: #ffffff; 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              margin: 0;
              padding: 0;
            }
            .nav { 
              position: fixed; 
              top: 0; 
              left: 0; 
              right: 0; 
              z-index: 1000; 
              background: rgba(10, 10, 10, 0.1); 
              backdrop-filter: blur(10px);
              padding: 1rem 0;
            }
            .nav-container { 
              max-width: 1200px; 
              margin: 0 auto; 
              padding: 0 2rem; 
              display: flex; 
              justify-content: space-between; 
              align-items: center; 
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
              display: inline-flex; 
              align-items: center; 
              font-size: 0.9rem; 
              border: none; 
              cursor: pointer; 
            }
            .btn-primary { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
            }
            .btn-secondary { 
              background: transparent; 
              color: #667eea; 
              border: 2px solid #667eea; 
            }
            .btn-cv { 
              background: linear-gradient(135deg, #28a745 0%, #20c997 100%); 
              color: white; 
              gap: 0.5rem; 
            }
          `
        }} />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <script dangerouslySetInnerHTML={{
          __html: `
            // Marquer le body comme chargé après l'hydratation
            document.addEventListener('DOMContentLoaded', function() {
              document.body.classList.add('loaded');
            });
          `
        }} />
      </body>
    </html>
  )
}