'use client';

import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiTarget, FiAward, FiCreditCard, FiCalendar } from 'react-icons/fi';
import { GiMuscleUp, GiMeal } from 'react-icons/gi';

export default function Project() {
  const features = [
    {
      icon: <FiTarget size={28} />,
      title: 'Programmes Personnalisés',
      description: 'Génération automatique de programmes d\'entraînement adaptés à votre profil, objectifs et contraintes physiques.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiCalendar size={28} />,
      title: 'Séances Personnalisables',
      description: 'Créez vos propres séances manuellement et intégrez-les dans votre historique pour un suivi précis.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FiAward size={28} />,
      title: 'Gamification & XP',
      description: 'Système de points d\'expérience et de ranking pour vous motiver et créer une dynamique compétitive.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <FiUsers size={28} />,
      title: 'Réseau Social',
      description: 'Consultez les profils des autres utilisateurs, découvrez leur parcours et suivez-les pour créer une communauté.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <GiMeal size={28} />,
      title: 'Plans Nutritionnels',
      description: 'À venir : génération de plans alimentaires personnalisés selon vos objectifs pour compléter votre entraînement.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <GiMuscleUp size={28} />,
      title: 'Avatar Évolutif',
      description: 'À venir : un avatar qui évolue avec votre progression pour renforcer l\'aspect motivationnel.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section id="project" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projet de Fin d&apos;Études
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <motion.h3
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            GymPartner
          </motion.h3>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Application de musculation personnalisée avec gamification
          </motion.p>
        </motion.div>

        {/* Hero Project Card */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl text-white"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
              <GiMuscleUp size={48} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Application Mobile de Fitness</h3>
              <p className="text-white/80">TypeScript • React Native • Jest • Storybook</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-white/90">
            GymPartner est une application complète de musculation qui propose des programmes entièrement
            personnalisés. Chaque utilisateur peut générer un plan adapté grâce à différents paramètres :
            objectifs, nombre de séances, taille, poids, sexe, groupes musculaires ciblés et problèmes physiques.
            L&apos;application intègre une forte dimension de gamification pour motiver les utilisateurs et créer
            une dynamique communautaire engageante.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 bg-gradient-to-r ${feature.color} rounded-xl mb-4`}>
                <div className="text-white">{feature.icon}</div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Business Model */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 1.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
              <FiCreditCard size={32} className="text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Modèle Économique
            </h3>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            L&apos;application repose sur un <span className="font-semibold text-blue-600 dark:text-blue-400">abonnement mensuel</span>,
            avec une <span className="font-semibold text-purple-600 dark:text-purple-400">période d&apos;essai gratuite d&apos;un mois</span> permettant
            à chaque utilisateur de tester l&apos;application et de constater les premiers résultats avant de s&apos;engager.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
              <FiTrendingUp size={24} className="text-blue-600 dark:text-blue-400 mb-3" />
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">Historique Complet</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Gardez une trace de tous vos entraînements, qu&apos;ils soient générés automatiquement ou créés manuellement.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
              <FiUsers size={24} className="text-green-600 dark:text-green-400 mb-3" />
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">Communauté Active</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Suivez d&apos;autres utilisateurs, partagez vos expériences et créez une dynamique de groupe motivante.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
