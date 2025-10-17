'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiGitBranch, FiLayers, FiZap, FiCpu } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiTypescript, SiPython, SiFlutter, SiFirebase } from 'react-icons/si';

export default function FloatingIcons() {
  const icons = [
    { Icon: SiReact, color: 'text-cyan-500', delay: 0 },
    { Icon: SiNextdotjs, color: 'text-gray-800 dark:text-white', delay: 0.5 },
    { Icon: SiTypescript, color: 'text-blue-600', delay: 1 },
    { Icon: SiPython, color: 'text-yellow-500', delay: 1.5 },
    { Icon: SiFlutter, color: 'text-blue-400', delay: 2 },
    { Icon: SiFirebase, color: 'text-orange-500', delay: 2.5 },
    { Icon: FiCode, color: 'text-purple-500', delay: 3 },
    { Icon: FiDatabase, color: 'text-green-500', delay: 3.5 },
    { Icon: FiGitBranch, color: 'text-red-500', delay: 4 },
    { Icon: FiLayers, color: 'text-indigo-500', delay: 4.5 },
    { Icon: FiZap, color: 'text-yellow-400', delay: 5 },
    { Icon: FiCpu, color: 'text-pink-500', delay: 5.5 },
  ];

  const getRandomPosition = (index: number) => {
    const positions = [
      { top: '10%', left: '5%' },
      { top: '20%', right: '8%' },
      { top: '35%', left: '3%' },
      { top: '50%', right: '5%' },
      { top: '65%', left: '7%' },
      { top: '75%', right: '10%' },
      { top: '15%', left: '85%' },
      { top: '40%', left: '90%' },
      { top: '60%', right: '92%' },
      { top: '80%', left: '8%' },
      { top: '45%', right: '15%' },
      { top: '70%', left: '80%' },
    ];
    return positions[index % positions.length];
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-10`}
          style={getRandomPosition(index)}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            delay: delay,
            ease: 'easeInOut',
          }}
        >
          <Icon size={40 + (index % 3) * 20} />
        </motion.div>
      ))}
    </div>
  );
}
