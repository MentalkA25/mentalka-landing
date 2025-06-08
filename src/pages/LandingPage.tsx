import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ChatDemo from '../components/ChatDemo';
import OurMission from '../components/OurMission';
import EmotionalStateTest from '../components/EmotionalStateTest';
import RegistrationForm from '../components/RegistrationForm';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        <div className="space-y-16 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ChatDemo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <OurMission />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <EmotionalStateTest />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <RegistrationForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 