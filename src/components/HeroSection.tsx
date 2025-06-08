import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-primary-600 overflow-hidden">
      {/* Анімовані блюр-споти */}
      <motion.div
        className="absolute left-[-200px] bottom-[-200px] w-[600px] h-[600px] bg-blur-yellow rounded-full filter blur-[120px] opacity-70 animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-200px] top-[-200px] w-[600px] h-[600px] bg-blur-blue rounded-full filter blur-[120px] opacity-70 animate-pulse"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />

      {/* Основний текст */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Mentаlka.ai</h1>
        <p className="text-xl md:text-2xl font-medium text-white mb-10">
          Твоя емоційна підтримка 24/7.<br />
          Просто. Конфіденційно. Людяно
        </p>
        {/* Анімована крапка */}
        <motion.div
          className="w-5 h-5 rounded-full bg-cyan-400 mt-2"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
};

export default HeroSection; 