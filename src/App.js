import React, { useState, useEffect } from 'react';
import { predictAdaptiveLevel } from './ai/inference';

export default function App() {
  const [learningLevel, setLearningLevel] = useState('loading...');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    // Monitor offline state
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Run offline Edge ML assessment
    predictAdaptiveLevel([3200, 0.85, 4]).then((level) => setLearningLevel(level));

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <header style={{ borderBottom: '2px solid #eee', pb: '10px' }}>
        <h1>🌍 Roothub Digiverse</h1>
        <p><strong>Status:</strong> {isOffline ? '📡 Offline Mode (Cached Active)' : '🌐 Online'}</p>
        <p><strong>Adaptive Learning Pathway:</strong> {learningLevel.toUpperCase()}</p>
      </header>

      <main style={{ marginTop: '20px' }}>
        <section style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
          <h2>📚 Toyo & Boro Interactive Comic</h2>
          <p>Episode 1: What is Digital Citizenship?</p>
          <button style={{ padding: '10px 15px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Start Reading (Offline Ready)
          </button>
        </section>

        <section style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px' }}>
          <h2>🎙️ DigiKidz Radio Lessons</h2>
          <p>Episode 4: Cyber Safety with Uncle Francis</p>
          <audio controls style={{ width: '100%' }}>
            <source src="/assets/audio/sample-episode.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>
      </main>
    </div>
  );
}
