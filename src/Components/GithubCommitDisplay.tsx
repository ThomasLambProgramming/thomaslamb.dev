import React from 'react';

const GithubCommitDisplay: React.FC<{isDarkMode: boolean}> = ({isDarkMode}) =>
{
    return (
    <div className="mr-6 mt-8 lg:justify-normal lg:align-top align-middle items-center">
        {/* Possibly change the commit history text to be the github logo */}
        <h3 className="align-center lg:align-middle justify-center mr-5 flex text-lg lg:pb-[300px]">Commit History</h3>
        {/* Image must always be larger than 660px as that is the raw size and if it gets scaled down it is unreadable */}
        
        <div className="lg:-rotate-90 lg:min-w-[660px] mr-5 bg-DarkNeutral-400 p-2 rounded-sm">
            <img src={isDarkMode ? "http://ghchart.rshah.org/000000/ThomasLambProgramming" : "http://ghchart.rshah.org/d245b1/ThomasLambProgramming"} alt="ThomasLamb GithubChart"/>
        </div>
    </div>
    );
}

export default GithubCommitDisplay;