'use client';

import { motion } from 'framer-motion';
import { FiCode, FiAward, FiActivity } from 'react-icons/fi';
import { SiStrava } from 'react-icons/si';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              À propos de moi
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sport Card */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-full">
                <FiActivity size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
              Sportif Passionné
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
              Pratique journaliere de la musculation et du running depuis 3 ans.
              Le sport est une véritable discipline qui m&apos;apporte rigueur et détermination.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.strava.com/athletes/136067963?utm_source=ios_share&utm_medium=social&share_sig=C081F2A01753274547&_branch_match_id=1220726422338367745&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy4pSixL1EssKNDLyczL1k9JSS4tTSv3SQ1Lsq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FAEZU5q09AAAA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 font-semibold"
              >
                <SiStrava size={20} />
                Mon profil Strava
              </a>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
                <FiAward size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
              Double Diplôme
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              En parallèle de ma quatrième année à Epitech, j&apos;ai réalisé un double diplôme
              à la <span className="font-semibold text-blue-600 dark:text-blue-400">Technological University of Dublin</span> en Irlande.
              Une expérience enrichissante qui m&apos;a permis de développer mes compétences
              en IT Management et développement d&apos;applications mobiles dans un contexte international.
            </p>
          </motion.div>

          {/* Passion Card */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
                <FiCode size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
              Passionné de Code
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Le développement est bien plus qu&apos;un métier pour moi, c&apos;est une passion.
              J&apos;aime créer des applications modernes, performantes et élégantes qui offrent
              une expérience utilisateur exceptionnelle. Toujours à l&apos;affût des dernières
              technologies et des meilleures pratiques.
            </p>
          </motion.div>
        </div>

        {/* Skills badges */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            Technologies & Compétences
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Dart' ,'C', 'Java', 'React Native', 'Node.js', 'Nest.js', 'Flutter', 'Python', 'Firebase', 'Tailwind CSS'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
