import React, { useState, useEffect } from 'react';

const sampleExercise = {
  id: 'ex-101',
  title: 'Toyo & Boro Digital Safety Challenge',
  question: 'Toyo received a message from an unknown number asking for his home password. What should he do?',
  options: [
    { id: 'a', text: 'Send the password immediately to be helpful.', isCorrect: false },
    { id: 'b', text: 'Ignore and report the message to Uncle Francis or an adult.', isCorrect: true },
    { id: 'c', text: 'Post the message on social media to ask friends.', isCorrect: false }
  ],
  explanation: 'Never share passwords or personal info with unknown contacts online!'
};

export default function InteractiveExercise() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem('digiverse_score') || 0;
    setScore(Number(savedScore));
  }, []);

  const handleSelect = (optionId) => {
    if (submitted) return;
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setSubmitted(true);
    
    const chosen = sampleExercise.options.find(o => o.id === selectedOption);
    if (chosen?.isCorrect) {
      const newScore = score + 10;
      setScore(newScore);
      localStorage.setItem('digiverse_score', newScore);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setSubmitted(false);
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.badge}>Interactive Exercise</span>
        <span style={styles.score}>⭐ Points: {score}</span>
      </div>

      <h3 style={styles.title}>{sampleExercise.title}</h3>
      <p style={styles.question}>{sampleExercise.question}</p>

      <div style={styles.optionsContainer}>
        {sampleExercise.options.map((option) => {
          let optionStyle = { ...styles.optionBtn };
          if (selectedOption === option.id) optionStyle = { ...optionStyle, ...styles.selectedOption };
          if (submitted && option.isCorrect) optionStyle = { ...optionStyle, ...styles.correctOption };
          if (submitted && selectedOption === option.id && !option.isCorrect) optionStyle = { ...optionStyle, ...styles.wrongOption };

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              style={optionStyle}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <button 
          onClick={handleSubmit} 
          disabled={!selectedOption} 
          style={selectedOption ? styles.submitBtn : styles.disabledBtn}
        >
          Check Answer
        </button>
      ) : (
        <div style={styles.feedbackBox}>
          <p style={styles.explanation}>{sampleExercise.explanation}</p>
          <button onClick={handleReset} style={styles.resetBtn}>Try Again</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: { background: '#ffffff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', margin: '20px 0' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  badge: { background: '#e0e7ff', color: '#4338ca', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' },
  score: { fontWeight: 'bold', color: '#f59e0b' },
  title: { margin: '0 0 8px 0', fontSize: '18px', color: '#1f2937' },
  question: { color: '#4b5563', fontSize: '15px', lineHeight: '1.5' },
  optionsContainer: { display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0' },
  optionBtn: { padding: '12px 16px', borderRadius: '8px', border: '2px solid #e5e7eb', background: '#fff', textAlign: 'left', cursor: 'pointer', fontSize: '14px', transition: 'all 0.2s' },
  selectedOption: { borderColor: '#4f46e5', background: '#f5f3ff' },
  correctOption: { borderColor: '#10b981', background: '#ecfdf5', color: '#065f46', fontWeight: 'bold' },
  wrongOption: { borderColor: '#ef4444', background: '#fef2f2', color: '#991b1b' },
  submitBtn: { width: '100%', padding: '12px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  disabledBtn: { width: '100%', padding: '12px', background: '#d1d5db', color: '#9ca3af', border: 'none', borderRadius: '8px', cursor: 'not-allowed' },
  feedbackBox: { background: '#f9fafb', padding: '12px', borderRadius: '8px', textAlign: 'center' },
  explanation: { margin: '0 0 10px 0', fontSize: '14px', color: '#374151' },
  resetBtn: { padding: '8px 16px', background: '#6b7280', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }
};
