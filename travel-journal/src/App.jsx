/* eslint-disable arrow-body-style */
import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import data from './data';

function App() {
  const cards = data.map((card) => {
    return (
      <Cards
        key={card.id}
        item={card}
      />
    );
  });

  return (
    <div className="content">
      <Header />
      <div className="container">
        {cards}
      </div>
    </div>
  );
}

export default App;
