import React from 'react';

function GithubProfile(props) {

    let theData = props;

    return (
        <div className="profilecard">
            <img src={theData.avatar_url} alt="ppic"></img>
            <div className="info">
                <div className="name">{theData.name}</div>
                <div className="company">{theData.company}</div>
                <div className="company">{theData.location}</div>
            </div>
        </div>
    )
};

export default GithubProfile

//link to place holder image: https://placehold.it/75