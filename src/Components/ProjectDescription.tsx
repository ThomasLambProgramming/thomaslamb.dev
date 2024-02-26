import React from "react";
import DelayedImage from "./DelayedImage";

const ProjectDescription: React.FC<{
  isDarkMode: boolean;
  hideProjectDetails: boolean;
  projectName: string;
  copyrightText: string;
  linksText: string[];
  linksLinks: string[];
  technologiesList: string[];
  projectDescriptions: string[];
  onClickFunction: () => void;
}> = ({
  isDarkMode,
  hideProjectDetails,
  copyrightText,
  linksLinks,
  linksText,
  projectName,
  technologiesList,
  projectDescriptions,
  onClickFunction,
}) => {
    let projectNameWithoutSpace = projectName.replace(/\s/g, "");

    return (
      <div
        className={
          "z-30 relative min-h-[300px] min-w-[400px] mt-4 rounded-md flex flex-col lg:items-start items-center lg:flex-row w-full shadow-md mb-6 " +
          (isDarkMode ? "dark:bg-DarkNeutral-200 shadow-gray-700 shadow-lg " : "bg-DarkNeutral-1100 ")
        }
      >
        {/* Project Description + skills and etc. */}
        <div className="flex flex-col items-start pt-3 ml-6 w-full h-[90%]">
          <div className="min-w-[90%] lg:w-[30%] w-[95%]">
            <h3
              className={
                "text-2xl font-medium mb-4 " +
                (isDarkMode ? "text-Neutral-400" : "text-DarkNeutral-200")
              }
            >
              {projectName}
            </h3>

            <div className="flex flex-row w-full justify-start space-x-3 mb-4 text-sm">
              {technologiesList.map((techString: string) => (
                <p
                  key={projectNameWithoutSpace + techString}
                  className={
                    "rounded-lg text-md pl-4 pr-4 pt-1 pb-1 text-center align-middle justify-center " +
                    (isDarkMode
                      ? "dark:bg-Neutral-200 text-DarkNeutral-200"
                      : "bg-Neutral-400")
                  }
                >
                  {techString}
                </p>
              ))}
            </div>

            <div className="flex flex-col">
              {projectDescriptions.map((projDesc: string) => (
                <p
                  className="mb-4 text-sm"
                  key={projDesc.substring(
                    0,
                    projDesc.length > 10 ? 10 : projDesc.length
                  )}
                >
                  {projDesc}
                </p>
              ))}
              <div className="flex lg:flex-row lg:space-x-2 flex-col lg:text-start text-center w-full">
                {linksLinks.map((linkHref: string, index: number) => (
                  // let filePath = '/ProjectAssets/' + projectName + "/" + projectName + "Preview";
                  <a href={linkHref} target="_blank" className="mb-1 text-sm lg:align-bottom lg:items-end underline hover:text-blue-500" key={projectNameWithoutSpace + linkHref.substring(0, linkHref.length > 20 ? 20 : linkHref.length)}>
                    {(hideProjectDetails ? linksText[index] : <img className="max-w-[20%]" src={isDarkMode ? "/ProjectAssets/github-mark-white.png" : "/ProjectAssets/github-mark.png"}></img>)}
                  </a>
                ))}
              </div>
            </div>

            <p className="text-Neutral-500 lg:text-start text-sm text-center dark:text-DarkNeutral-600 lg:mt-3 mb-2 mt-2">
              {copyrightText}
            </p>
          </div>
        </div>
        {/* Project image and details button */}
        <div className="max-w-[40%] min-w-[40%] flex flex-col items-center justify-center">
          <DelayedImage
            projectName={projectNameWithoutSpace}
            className="min-h-[70%] h-[100%] items-center rounded-md"
          ></DelayedImage>

          {hideProjectDetails ? (
            <p className="pb-4"></p>
          ) : (
            <button onClick={onClickFunction} className={`w-[90%] rounded-sm text-sm border-2 mt-4 mb-4 ${isDarkMode ? "" : "border-black"}`}>
              Project Details
            </button>
          )}
        </div>
      </div>
    );
  };

export default ProjectDescription;
