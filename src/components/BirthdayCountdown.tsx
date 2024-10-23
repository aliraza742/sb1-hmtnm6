import { motion } from 'framer-motion';
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export function BirthdayCountdown({ birthDate }: { birthDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
      
      if (nextBirthday < now) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
      }

      setTimeLeft({
        days: differenceInDays(nextBirthday, now),
        hours: differenceInHours(nextBirthday, now) % 24,
        minutes: differenceInMinutes(nextBirthday, now) % 60
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000 * 60);
    return () => clearInterval(timer);
  }, [birthDate]);

  return (
    <motion.div 
      className="p-6 rounded-xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-6 h-6 text-indigo-400" />
        <h2 className="text-xl font-semibold text-white">Birthday Countdown</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            className="p-4 rounded-lg bg-white/5"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-white">{value}</div>
            <div className="text-sm text-indigo-200 capitalize">{unit}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}