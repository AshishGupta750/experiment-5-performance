import React, { Suspense, lazy } from 'react';

// Lazy load the heavy chart
const HeavyChart = lazy(() => import('../components/HeavyChart'));

const StatCard = ({ title, value, color }) => (
  <div style={{
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    borderLeft: `5px solid ${color}`
  }}>
    <h3 style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>{title}</h3>
    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{value}</div>
  </div>
);

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', background: '#f5f7fa', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>Performance Dashboard</h1>

      {/* Top Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <StatCard title="Total Products" value="2,000+" color="#3b82f6" />
        <StatCard title="Lighthouse Score" value="98" color="#10b981" />
        <StatCard title="Bundle Size" value="150 KB" color="#f59e0b" />
        <StatCard title="Render Time" value="< 50ms" color="#ef4444" />
      </div>

      {/* Chart Section using Suspense */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '15px', color: '#333' }}>Traffic Overview</h2>
        <Suspense fallback={<div style={{ padding: '50px', background: '#eee', textAlign: 'center', borderRadius: '10px' }}>Loading Chart...</div>}>
          <HeavyChart />
        </Suspense>
      </div>

      {/* Optimized Images Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        {/* Image 1 */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#333' }}>Lazy Loaded Image 1</h3>
          <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
            Only loads when near viewport (Technology)
          </p>
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" 
            alt="Technology workspace" 
            loading="lazy" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', background: '#eee' }}
          />
        </div>

        {/* Image 2 */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#333' }}>Lazy Loaded Image 2</h3>
          <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
             optimized quality (Analytics)
          </p>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
            alt="Data Analytics" 
            loading="lazy" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', background: '#eee' }}
          />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;