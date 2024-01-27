import React from 'react';

const GithubCommitDisplay: React.FC<{isDarkMode: boolean}> = ({isDarkMode}) =>
{
    return (
    <div className="">
        <h3 className="align-middle justify-center flex text-lg pb-[370px] ml-5">Commit History</h3>
        {/* Image must always be larger than 660px as that is the raw size and if it gets scaled down it is unreadable */}
        <div className="object-contain -rotate-90 bg-slate-600 scale-125 min-w-[660px]">
            <img src={isDarkMode ? "http://ghchart.rshah.org/d4d2d0/ThomasLambProgramming" : "http://ghchart.rshah.org/2b2d2f/ThomasLambProgramming"} alt="ThomasLamb GithubChart" />
        </div>
    </div>
    );
}

export default GithubCommitDisplay;