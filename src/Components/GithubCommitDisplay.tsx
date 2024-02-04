import React from 'react';

const GithubCommitDisplay: React.FC<{isDarkMode: boolean}> = ({isDarkMode}) =>
{
    return (
    <div className="mr-6 mt-8 lg:justify-normal lg:align-top align-middle items-center ">
        {/* Possibly change the commit history text to be the github logo */}
        <h3 className="align-center lg:align-middle justify-center mr-5 text-md lg:pb-[20px] ml-2 lg:text-start text-center ">Commit History</h3>
        {/* Image must always be larger than 660px as that is the raw size and if it gets scaled down it is unreadable */}
        
        <div className={"lg:-rotate-90 lg:min-w-[660px] lg:mb-[400px] lg:min-h-[650px] mr-5 rounded-sm"}>
            <img src={isDarkMode ? "http://ghchart.rshah.org/000000/ThomasLambProgramming" : "http://ghchart.rshah.org/444444/ThomasLambProgramming"} alt="ThomasLamb GithubChart"/>
        </div>
    </div>
    );
}

export default GithubCommitDisplay;