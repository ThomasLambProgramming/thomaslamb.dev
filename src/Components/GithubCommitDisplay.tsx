import React from 'react';

const GithubCommitDisplay: React.FC<{isDarkMode: boolean}> = ({isDarkMode}) =>
{
    return (
    <div className="mr-6 mt-8">
        {/* Possibly change the commit history text to be the github logo */}
        <h3 className="align-middle justify-center mr-5 flex text-lg pb-[370px]">Commit History</h3>
        {/* Image must always be larger than 660px as that is the raw size and if it gets scaled down it is unreadable */}
        
        <div className="object-contain -rotate-90 scale-125 min-w-[660px] mr-5 bg-DarkNeutral-400 p-2 rounded-sm">
            <img src={isDarkMode ? "http://ghchart.rshah.org/000000/ThomasLambProgramming" : "http://ghchart.rshah.org/d245b1/ThomasLambProgramming"} alt="ThomasLamb GithubChart"/>
        </div>
    </div>
    );
}

export default GithubCommitDisplay;