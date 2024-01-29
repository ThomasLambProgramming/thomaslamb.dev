import React from 'react';
import SocialLinks from "./SocialLinks";

const Header: React.FC<{isDarkMode: boolean}> = ({isDarkMode}) =>
{
    return (
      <div className={isDarkMode ? "ml-24 pt-16 mr-24 flex flex-col text-center items-center text-Neutral-100" :
                                   "ml-24 pt-16 mr-24 flex flex-col text-center items-center text-DarkNeutral-100"}>
        <div className="">
          <div className="text-6xl">
            <h1 className="">Thomas Lamb</h1>
            <h1 className="text-4xl mb-10">Game Programmer</h1>
          </div>

          <div className="flex flex-row text-left ">
            <div className="mt-8">
              Game developer with an interest in a wide variety of programming disciplines. 
              <div>
                Currently working on a project in UE5 with C++ and a custom engine in C++
              </div>
            </div>
            <div className="lg:ml-36 md:ml-24 flex flex-row-reverse justify-end items-center ml-2 mt-8 ">
              <SocialLinks />
            </div>
          </div>
        </div>
          <hr className="h-px w-[100%] mt-8 bg-slate-900 border-0 dark:bg-slate-900" />
      </div>
    );
}

export default Header;