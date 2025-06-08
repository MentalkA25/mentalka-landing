import React from 'react';
import { motion } from 'framer-motion';

const ChatDemo: React.FC = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Спробуй поговорити з нашим ботом
        </h2>
        <div className="bg-white/5 rounded-lg p-6 space-y-4 border border-white/10">
          <div className="flex items-start space-x-4">
            <div className="bg-white/10 rounded-full p-2 backdrop-blur-sm">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-white">Як ви себе почуваєте сьогодні?</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 justify-end">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-white">Я відчуваю себе трохи стресованим через роботу.</p>
            </div>
            <div className="bg-white/10 rounded-full p-2 backdrop-blur-sm">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChatDemo; 