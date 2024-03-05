import React from 'react';
import { useParams } from 'react-router-dom';
import TextFileToHTMLComponent from '../utils/convertTextFilesToHTML';

const PortfolioPage = ({ item }) => {
    // const { id } = useParams();
    // const item = portfolioItems.find(item => item.id.toString() === id);

    if (!item) {
        return <div>Portfolio item not found.</div>;
    }

    const body = (
        <ul>
            {item.body.map((note, index) => (
                <ol key={index}>{note}</ol>
            ))}
        </ul>
    )

    // console.log(body)

    return (
        <div className="portfolio-page">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            {body}
        </div>
    );
};

export default PortfolioPage;