import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ZodiacWheel } from './components/ZodiacWheel';
import { BirthdayCountdown } from './components/BirthdayCountdown';

function App() {
  const [birthDate] = useState(new Date(1990, 0, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <Moon className="w-8 h-8 text-indigo-400" />
            <h1 className="text-2xl font-bold text-white">Celestial Insights</h1>
          </div>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Sun className="w-6 h-6 text-yellow-400" />
          </button>
        </header>

        <main className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <BirthdayCountdown birthDate={birthDate} />
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg">
              <h2 className="text-xl font-semibold text-white mb-4">Daily Horoscope</h2>
              <p className="text-indigo-200">
                Today's celestial alignment brings unexpected opportunities. 
                Stay open to new connections and trust your intuition.
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <ZodiacWheel />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;