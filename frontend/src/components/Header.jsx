import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar';

const Header = ({ portfolioItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav>
                <div className="dropdown">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        Work
                    </button>
                    {isOpen && (
                        <div className="dropdown-content">
                            {portfolioItems.map(item => (
                                <Link key={item.id} to={item.path}>
                                    {item.title}
                                </Link>
                            ))}
                            <Link to="/about">About</Link>
                            <Link to="/">Home</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;