import React from 'react';

const PortfolioItem = ({ item }) => {
    return (
        <div className="portfolio-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    );
};

export default PortfolioItem;