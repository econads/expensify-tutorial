import React from 'react';

const PortfolioList = (props) => {
    console.log(props);
    return (
        <div>
            This is the Portfolio # {props.match.params.id}
        </div>
    )
};

export default PortfolioList;