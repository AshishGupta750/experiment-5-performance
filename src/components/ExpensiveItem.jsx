import React from 'react';

const ExpensiveItem = ({ data, style }) => {
  // Simulating a component that is "expensive" to render [cite: 139]
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Artificial delay to simulate heavy rendering
  }

  return (
    <div style={{ ...style, borderBottom: '1px solid #eee', padding: '10px', display: 'flex', alignItems: 'center' }}>
      <strong>{data.name}</strong> 
      <span style={{ marginLeft: '10px' }}>${data.price}</span>
      <span style={{ marginLeft: '10px', color: '#666' }}>{data.category}</span>
    </div>
  );
};

// [cite: 70] React.memo only re-renders if props change
export default React.memo(ExpensiveItem);