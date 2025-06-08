import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { registerUser } from '../services/registrationService';

const regions = [
  'Вінницька',
  'Волинська',
  'Дніпропетровська',
  'Донецька',
  'Житомирська',
  'Закарпатська',
  'Запорізька',
  'Івано-Франківська',
  'Київська',
  'Кіровоградська',
  'Луганська',
  'Львівська',
  'Миколаївська',
  'Одеська',
  'Полтавська',
  'Рівненська',
  'Сумська',
  'Тернопільська',
  'Харківська',
  'Херсонська',
  'Хмельницька',
  'Черкаська',
  'Чернівецька',
  'Чернігівська',
];

const sources = [
  'Соціальні мережі',
  'Пошукові системи',
  'Рекомендації друзів',
  'ЗМІ',
  'Інше',
];

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    region: '',
    source: '',
    newsletter: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    // Валідація
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Ім'я обов'язкове";
    if (!formData.email) newErrors.email = "Email обов'язковий";
    if (!formData.password) newErrors.password = "Пароль обов'язковий";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Паролі не співпадають";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Тут буде логіка відправки форми
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      setErrors({ submit: 'Помилка при відправці форми' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/10"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Реєстрація
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
              Ім'я
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/50"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/50"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/50"
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-1">
              Повторіть пароль
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/50"
              required
            />
          </div>
          
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-white/80 mb-1">
              Регіон
            </label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/50"
            >
              <option value="">Оберіть регіон</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="source" className="block text-sm font-medium text-white/80 mb-1">
              Звідки ви дізналися про нас?
            </label>
            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-white/50"
            >
              <option value="">Оберіть варіант</option>
              {sources.map(source => (
                <option key={source} value={source}>{source}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="newsletter">Я хочу отримувати новини та оновлення</label>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full btn bg-white text-primary-600 hover:bg-white/90 backdrop-blur-sm"
          >
            Зареєструватися
          </motion.button>
          
          <p className="text-center text-sm text-white/60">
            Вже маєте акаунт?{' '}
            <button 
              type="button" 
              className="text-white hover:text-white/80 transition-colors"
              onClick={() => {/* Додати обробник кліку */}}
            >
              Увійти
            </button>
          </p>
        </form>
      </motion.div>
    </section>
  );
};

export default RegistrationForm; 