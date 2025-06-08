import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-600 text-white relative overflow-hidden">
        {/* Blur spots */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blur-blue rounded-full filter blur-[100px] opacity-50 animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blur-purple rounded-full filter blur-[120px] opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-blur-pink rounded-full filter blur-[140px] opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-[550px] h-[550px] bg-blur-teal rounded-full filter blur-[110px] opacity-50 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-[650px] h-[650px] bg-blur-yellow rounded-full filter blur-[130px] opacity-50 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blur-orange rounded-full filter blur-[100px] opacity-50 animate-pulse" style={{ animationDelay: '5s' }}></div>
        
        {/* Основний контент */}
        <div className="relative z-10">
          <LandingPage />
        </div>
      </div>
    </Router>
  );
}

export default App;
