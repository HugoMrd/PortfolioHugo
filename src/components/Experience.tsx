'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      company: 'LykHubs',
      role: 'Développeur Full-Stack',
      period: 'Sept 2025 - Fév 2026',
      location: 'Stage',
      description: 'Développement d\'un réseau social jusqu\'à sa mise en production',
      technologies: ['Flutter (Dart)', 'Nest.js (TypeScript)', 'Mobile App Development'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'ToucanToco',
      role: 'Développeur Front-End',
      period: 'Fév 2024 - Juin 2024',
      location: 'Stage',
      description: 'Implémentation et intégration de composants (Design System)',
      technologies: ['React', 'TypeScript', 'Vue.js', 'Storybook'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'SavProGroup',
      role: 'Développeur Full-Stack',
      period: 'Sept 2023 - Fév 2024',
      location: 'Stage',
      description: 'Refonte de pages d\'app mobile et ajouts d\'endpoints API',
      technologies: ['Flutter (Dart)', 'PHP (Symfony)', 'Microsoft Security'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      company: 'RATP',
      role: 'Développeur Full-Stack',
      period: 'Juil 2022 - Déc 2022',
      location: 'Stage',
      description: 'Développement d\'un site intranet pour la visualisation des temps d\'attente des métros en temps réel',
      technologies: ['JavaScript', 'Bootstrap', 'Python', 'PHP', 'TCP/IP'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expériences Professionnelles
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="md:w-11/12">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
                >
                  {/* Timeline dot */}
                  <div className={`hidden md:block absolute top-8 ${
                    index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                  } w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white dark:border-gray-900`} />

                  {/* Header gradient */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${exp.color} rounded-t-2xl`} />

                  <div className="mt-2">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 font-semibold mb-4">
                      {exp.role}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
