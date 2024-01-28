import React from 'react';

const GithubCommitDisplay: React.FC<{isDarkMode: boolean}> = ({isDarkMode}) =>
{
    return (
    <div className="">
        {/* Possibly change the commit history text to be the github logo */}
        <h3 className="align-middle justify-center flex text-lg pb-[370px]">Commit History</h3>
        {/* Image must always be larger than 660px as that is the raw size and if it gets scaled down it is unreadable */}
        <div className="object-contain -rotate-90 scale-125 min-w-[660px] mr-5">
            <img src={isDarkMode ? "http://ghchart.rshah.org/738496/ThomasLambProgramming" : "http://ghchart.rshah.org/2b2d2f/ThomasLambProgramming"} alt="ThomasLamb GithubChart" />
        </div>
    </div>
    );
}

export default GithubCommitDisplay;