import React from 'react';
import SocialLinks from "./SocialLinks";

const HeaderBar: React.FC<{isDarkMode: boolean, DarkModeToggledFunc : () => void}> = ({isDarkMode, DarkModeToggledFunc: DarkModeToggled}) =>
{
    return (
      <div className={("lg:h-20 h-52 flex lg:flex-row flex-col text-center items-center w-full lg:justify-start justify-center " + (isDarkMode ? "text-Neutral-200 bg-DarkNeutral-200" : "text-DarkNeutral-200 bg-DarkNeutral-1100"))}>
        
        <div className='flex lg:flex-row flex-col items-center'>
          <h1 className="pl-4 text-2xl w-44 ">Thomas Lamb</h1>
          <h1 className="pl-4 text-2xl w-60 lg:mr-8">Game Programmer</h1>
        </div>
        <div className=''></div>

        <div className='flex flex-row lg:mt-0 mt-4 justify-center items-center'>

        <div className="flex flex-row  justify-center items-center align-middle ">
            <SocialLinks />
        </div>

          <div className=''>
              <button onClick={DarkModeToggled} className="w-28 mt-2 h-[40px] rounded-md border-DarkNeutral-600 border dark:text-Neutral-0 text-DarkNeutralN-100">
                  {isDarkMode ? "Dark Mode" : "Light Mode"}
              </button>
          </div>
        </div>
      </div>
    );
}

export default HeaderBar;