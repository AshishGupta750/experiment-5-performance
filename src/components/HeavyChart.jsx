import React from 'react';

const HeavyChart = () => {
  // Simulation of a heavy component
  return (
    <div style={{
      height: '300px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '10px',
      padding: '20px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h3>Performance Analytics (Heavy Component)</h3>
        <p>This component was code-split and lazy loaded!</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', alignItems: 'flex-end', height: '100px', justifyContent: 'center' }}>
          {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
            <div key={i} style={{
              width: '20px',
              height: `${h}%`,
              background: 'rgba(255,255,255,0.8)',
              borderRadius: '4px'
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeavyChart;