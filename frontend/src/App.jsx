import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// import PortfolioPage from './pages/PortfolioPage';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  const portfolioItems = [
    { id: 1, title: 'Transcribing Tool', path: '/transcribing-tool', description: 'A tool for transcribing texts.' },
    { id: 2, title: 'City Government Records Retrieval', path: '/city-government-records-retrieval', description: 'A system for retrieving public documents for archival.' },
    { id: 3, title: 'Book-Look', path: '/book-look', description: 'A search engine for books.' },
    { id: 4, title: 'The Tome', path: '/the-tome', description: 'An extensive database of books.' }
  ];

  return (
    <Router>
      <Header portfolioItems={portfolioItems} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* {portfolioItems.map(item => (
          <Route key={item.id} path={item.path} element={<PortfolioPage item={item} />} />
        ))} */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
