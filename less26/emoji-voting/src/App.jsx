import React, { useState, useEffect } from 'react';

const emojis = ["😃", "😊", "😎", "🤩", "😍"];

export default function App() {
  const [votes, setVotes] = useState(() => {
    const stored = localStorage.getItem("emojiVotes");
    return stored ? JSON.parse(stored) : Object.fromEntries(emojis.map(e => [e, 0]));
  });

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("emojiVotes", JSON.stringify(votes));
  }, [votes]);

  const vote = (emoji) => {
    setVotes(prev => ({
      ...prev,
      [emoji]: prev[emoji] + 1
    }));
  };

  const showResults = () => {
    const max = Math.max(...Object.values(votes));
    const best = Object.entries(votes).find(([_, val]) => val === max);
    setWinner(best);
  };

  const resetVotes = () => {
    const reset = Object.fromEntries(emojis.map(e => [e, 0]));
    setVotes(reset);
    setWinner(null);
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '28px' }}>Голосування за найкращий смайлик</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', margin: '30px 0' }}>
        {emojis.map((emoji, i) => (
          <div key={i} style={{ fontSize: '36px', cursor: 'pointer' }} onClick={() => vote(emoji)}>
            <div>{emoji}</div>
            <div>{votes[emoji]}</div>
          </div>
        ))}
      </div>

      <button onClick={showResults} style={btnStyle}>Show Results</button>
      <button onClick={resetVotes} style={{ ...btnStyle, backgroundColor: '#e53935', marginLeft: 10 }}>
        Очистити
      </button>

      {winner && (
        <div style={{ marginTop: '40px' }}>
          <h3>Результати голосування:</h3>
          <p><strong>Переможець:</strong></p>
          <div style={{ fontSize: '48px' }}>{winner[0]}</div>
          <p>Кількість голосів: {winner[1]}</p>
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};
