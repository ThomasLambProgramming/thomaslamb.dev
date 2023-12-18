import React from 'react';

const GithubCommitDisplay: React.FC<{isDarkMode: boolean}> = ({isDarkMode}) =>
{
    return (
    <div className="align-middle flex justify-center items-center mt-8 mb-12">
        <div className="m-auto contain-fill">
            <h3 className="align-middle justify-center flex text-lg mb-2">Github Commit History</h3>
            <img src={isDarkMode ? "http://ghchart.rshah.org/d4d2d0/ThomasLambProgramming" : "http://ghchart.rshah.org/2b2d2f/ThomasLambProgramming"} alt="ThomasLamb GithubChart" />
        </div>
    </div>
    );
}

export default GithubCommitDisplay;