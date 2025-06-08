import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmotionalStateTest: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    "Як часто ви відчуваєте задоволення від життя?",
    "Наскільки легко вам засинати?",
    "Як часто ви відчуваєте тривогу?",
    "Наскільки легко вам зосереджуватися?",
    "Як часто ви відчуваєте себе енергійним?",
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Тут можна додати логіку для відправки результатів
      console.log("Результати тестування:", newAnswers);
    }
  };

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Тест емоційного стану
        </h2>
        
        {currentQuestion < questions.length ? (
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-xl text-white mb-2">
                {questions[currentQuestion]}
              </p>
              <p className="text-sm text-white/60">
                Питання {currentQuestion + 1} з {questions.length}
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <motion.button
                  key={value}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(value)}
                  className="w-12 h-12 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-colors"
                >
                  {value}
                </motion.button>
              ))}
            </div>
            
            <div className="flex justify-between text-sm text-white/60">
              <span>Зовсім ні</span>
              <span>Дуже сильно</span>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Дякуємо за проходження тесту!
            </h3>
            <p className="text-white/80 mb-6">
              Наш AI-психолог проаналізує ваші відповіді та надасть персоналізовані рекомендації.
            </p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers([]);
              }}
              className="btn bg-white text-primary-600 hover:bg-white/90 backdrop-blur-sm"
            >
              Пройти тест знову
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default EmotionalStateTest; 