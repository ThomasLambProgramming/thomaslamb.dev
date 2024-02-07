import React from 'react';
import SocialLinks from "./SocialLinks";

const HeaderBar: React.FC<{isDarkMode: boolean, DarkModeToggledFunc : () => void}> = ({isDarkMode, DarkModeToggledFunc: DarkModeToggled}) =>
{
    return (
      <div className={("h-20 flex flex-row text-center items-center w-full justify-start " + (isDarkMode ? "text-Neutral-200 bg-DarkNeutral-200" : "text-DarkNeutral-200 bg-DarkNeutral-1100"))}>
        
          
        <h1 className="pl-4 text-2xl w-44">Thomas Lamb</h1>
        <h1 className="pl-4 text-2xl w-60 mr-8">Game Programmer</h1>
        <div className=''></div>

        <div className="flex flex-row text-left ">
            <SocialLinks />
        </div>

        <div className=''>
            <button onClick={DarkModeToggled} className="w-28 h-[40px] rounded-md border-DarkNeutral-600 border dark:text-Neutral-0 text-DarkNeutralN-100">
                {isDarkMode ? "Dark Mode" : "Light Mode"}
            </button>
        </div>
      </div>
    );
}

export default HeaderBar;