import React, { useState } from 'react';

const cardsData = [
  { id: 1, title: 'Card 1', content: 'Detailed content for Card 1.' },
  { id: 2, title: 'Card 2', content: 'Detailed content for Card 2.' },
  { id: 3, title: 'Card 3', content: 'Detailed content for Card 3.' },
];

const ExpandableCards = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {cardsData.map((card) => (
        <div
          key={card.id}
          onClick={() => handleCardClick(card.id)}
          className={`cursor-pointer rounded-2xl p-4 shadow-md transition-all duration-300 ease-in-out
            ${expandedCardId === card.id ? 'bg-blue-100 h-64' : 'bg-white h-40'}
          `}
        >
          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
          {expandedCardId === card.id && (
            <p className="text-gray-700">{card.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandableCards;
