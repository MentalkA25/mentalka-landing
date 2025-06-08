import React from 'react';
import { motion } from 'framer-motion';

const OurMission: React.FC = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-8">
          Наша місія
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg text-white/80 mb-4">
            Ми віримо, що кожна людина заслуговує на підтримку та розуміння. Наша місія - 
            зробити психологічну підтримку доступною для всіх, незалежно від обставин.
          </p>
          <p className="text-lg text-white/80">
            За допомогою штучного інтелекту ми створюємо безпечний простір, де кожен може 
            отримати підтримку та розуміння в будь-який час.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 my-8 border border-white/10"
        >
          <blockquote className="text-xl italic text-white">
            "Ми створюємо простір, де кожна емоція має право на існування, а кожна людина — 
            на підтримку. У світі, де все постійно змінюється, важливо мати місце, де тебе 
            просто вислухають."
          </blockquote>
          <p className="mt-4 text-right text-white/80">— Команда Mentalka.ai</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
          >
            <div className="bg-white/10 rounded-full p-3 w-16 h-16 mx-auto mb-4 backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Доступність</h3>
            <p className="text-white/80">
              Забезпечуємо психологічну підтримку для всіх, незалежно від часу та місця
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
          >
            <div className="bg-white/10 rounded-full p-3 w-16 h-16 mx-auto mb-4 backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Конфіденційність</h3>
            <p className="text-white/80">
              Гарантуємо повну конфіденційність ваших розмов та особистих даних
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
          >
            <div className="bg-white/10 rounded-full p-3 w-16 h-16 mx-auto mb-4 backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Ефективність</h3>
            <p className="text-white/80">
              Використовуємо передові технології для надання якісної психологічної допомоги
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurMission; 