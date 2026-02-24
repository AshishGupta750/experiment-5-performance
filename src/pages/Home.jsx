import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Performance Optimization Experiment</h1>
      <p>Select a demo:</p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Go to Virtualized List
        </button>
      </Link>
    </div>
  );
};

export default Home;