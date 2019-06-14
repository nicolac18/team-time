import React from 'react';

import './App.scss';

import Footer from 'components/Footer';
import Header from 'components/Header';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <div className="app-content" />

      <Footer />
    </div>
  );
}

export default App;
