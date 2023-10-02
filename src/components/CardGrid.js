import React from 'react';
import Card from './Card'; // Adjust the import path based on your project structure
import './CardGrid.css'; // Import your CSS file for styling

const CardGrid = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardGrid;
