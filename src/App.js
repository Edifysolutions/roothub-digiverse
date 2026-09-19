import React, { useState, useEffect } from 'react';
import { predictAdaptiveLevel } from './ai/inference';
import InteractiveExercise from './components/InteractiveExercise';
import PWAInstallPrompt from './components/PWAInstallPrompt';

export default function App() {
  const [learningLevel, setLearningLevel] = useState('evaluating...');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    predictAdaptiveLevel([3200, 0.85, 4]).then((level) => setLearningLevel(level));

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <PWAInstallPrompt />

      <header style={{ borderBottom: '2px solid #e5e7eb', paddingBottom: '12px' }}>
        <h1 style={{ margin: '0 0 8px 0' }}>🌍 Roothub Digiverse</h1>
        <p style={{ margin: '4px 0' }}>
          <strong>Network Status:</strong> {isOffline ? '📡 Offline (Cached Active)' : '🌐 Online'}
        </p>
        <p style={{ margin: '4px 0' }}>
          <strong>Adaptive Learning Path:</strong> <span style={{ background: '#4f46e5', color: '#fff', padding: '2px 8px', borderRadius: '4px' }}>{learningLevel.toUpperCase()}</span>
        </p>
      </header>

      <main>
        <InteractiveExercise />

        <section style={{ background: '#ffffff', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h2>📚 Toyo & Boro Interactive Comic</h2>
          <p>Episode 1: What is Digital Citizenship?</p>
          <button style={{ background: '#4f46e5', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
            Start Reading (Offline Ready)
          </button>
        </section>
      </main>
    </div>
  );
}
