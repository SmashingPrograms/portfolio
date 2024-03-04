import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioPage = ({ item }) => {
    // const { id } = useParams();
    // const item = portfolioItems.find(item => item.id.toString() === id);

    if (!item) {
        return <div>Portfolio item not found.</div>;
    }

    return (
        <div className="portfolio-page">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>
    );
};

export default PortfolioPage;