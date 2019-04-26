import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioList = () => {
    return (
        <div>
            <p>This is what I have done</p>
            <Link to="/portfolio/1">#1 </Link>
            <Link to="/portfolio/2">#2 </Link>
            <Link to="/portfolio/3">#3 </Link>
            <Link to="/portfolio/4">#4 </Link>
        </div>
    )
};

export default PortfolioList;