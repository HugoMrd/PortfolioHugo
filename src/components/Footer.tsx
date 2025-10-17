'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              Hugo Mouraud
            </motion.h3>
            <p className="text-gray-400">
              Développeur Full-Stack passionné par la création d&apos;applications modernes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Expériences', 'Projet', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase().replace('à propos', 'about').replace('expériences', 'experience').replace('accueil', 'home')}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Me suivre</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/HugoMrd"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hugo-mouraud"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:hugo.mouraud@epitech.eu"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                <FiMail size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Hugo Mouraud. Fait avec <FiHeart className="text-red-500" /> et Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
