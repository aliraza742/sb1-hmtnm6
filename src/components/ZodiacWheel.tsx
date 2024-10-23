import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';
import type { ZodiacSign } from '../types/zodiac';

const zodiacSigns: ZodiacSign[] = [
  'aries', 'taurus', 'gemini', 'cancer', 
  'leo', 'virgo', 'libra', 'scorpio',
  'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

export function ZodiacWheel() {
  const [activeSign, setActiveSign] = useState<ZodiacSign>('aries');

  return (
    <motion.div 
      className="relative w-96 h-96 mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-indigo-200/30 backdrop-blur-sm bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
        {zodiacSigns.map((sign, index) => {
          const angle = (index * 30 - 90) * (Math.PI / 180);
          const x = Math.cos(angle) * 160 + 192;
          const y = Math.sin(angle) * 160 + 192;

          return (
            <motion.button
              key={sign}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full
                ${activeSign === sign ? 'bg-indigo-600' : 'bg-indigo-400/20'}
                hover:bg-indigo-500 transition-colors`}
              style={{ left: x, top: y }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveSign(sign)}
            >
              <Star className="w-5 h-5 text-white" />
            </motion.button>
          );
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          key={activeSign}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-white capitalize"
        >
          {activeSign}
        </motion.div>
      </div>
    </motion.div>
  );
}