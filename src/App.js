import React from 'react';
import Header from './components/Header/Header';
import Insurances from './components/Insurances/Insurances';
import Loans from './components/Loans/Loans';
import Tasacion from './components/Tasacion/Tasacion';
import Footer from './components/Footer/Footer';

import './scss/app.sass';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Insurances />
      <Loans />
      <Tasacion />
      <Footer />
    </div>
  );
}

export default App;
