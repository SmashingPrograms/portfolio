import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import NotFoundPage from './components/NotFoundPage';
import convertTitlesToPaths from './utils/convertTitleToPath';
// import portfolioItems from './portfolioDocuments/portfolioItems';

let portfolioItems = [
  {
      "title": "Transcribing Tool",
      "description": "A tool for speedily transcribing texts.",
      "body": [
          "Goal: Speed up the process of transcribing scanned text by using a shorthand markup for formatting.",
          "Methods: Uses regular expressions and procedural methods to parse the markup language. Formats the data and uploads files to certain websites.",
          "Technology: Python, BeautifulSoup (HTML parser), some other parsing technologies, regular expressions, chunk uploading/downloading.",
          "Future plans: Create a user-friendly frontend, and apply it to as many types of transcription projects as possible.",
          "Impact: Users of an open-source transcription project have found the tool to improve their efficiency, and given positive feedback.",
          "Code available on request"
      ]
  },
  {
      "title": "City Government Records Retrieval",
      "description": "A system for retrieving public documents for archival.",
      "body": [
          "Goal: Retrieve public documents from the web for archival",
          "Methods: Uses the API for the town of Clyde, Ohio’s website (https://api.clydeohio.org) to systematically bulk-download PDF files and metadata from their database.",
          "Technology: TBA",
          "Future plans: Generalize this to fit other government records systems with similar APIs.",
          "Code available on request"
      ]
  },
  {
      "title": "Book-Look",
      "description": "A search engine for books.",
      "body": [
          "Carolina Code School final project",
          "Goal: Create a word game that gives players random passages from random books, with blanks to fill in.",
          "Methods: Developed a React frontend and Django backend with SQL database. Uses downloaded Gutenberg transcription data to dynamically generate word games passages. Also has user authentication and login, and a points system for the game.",
          "Future plans: Improve the look and feel, make a scoreboard, give the option to choose chapters of the book (easier for classroom use).",
          "Repository: https://github.com/SmashingPrograms/book-look-app"
      ]
  },
  {
      "title": "The Tome",
      "description": "An extensive database of books.",
      "body": [
          "DevelopCarolina internship umbrella project. Worked with another intern to complete the project.",
          "Goals: The Tome is a note-taking website for board game worlds.",
          "Methods: It allows the adding of worlds, and boards within those worlds, and notes within those boards. It saves each world of each associated user in the database.",
          "Technology used: TBA",
          "Future plans: TBA",
          "Repository: https://github.com/The-Tome"
      ]
  }
];

const App = () => {

  portfolioItems = convertTitlesToPaths(portfolioItems);
  // portfolioItems = convertTextFilesToHTML(portfolioItems);
  console.log(portfolioItems)

  return (
    <Router>
      <Header portfolioItems={portfolioItems} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {portfolioItems.map(item => (
            <Route key={item.id} path={"/" + item.path} element={<PortfolioPage item={item} />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
