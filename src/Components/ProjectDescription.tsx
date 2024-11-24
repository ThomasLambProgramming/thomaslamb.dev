import React from "react";
import CarouselDisplay from "./CarouselDisplay";
import { useState } from "react";

const ProjectDescription: React.FC<{
  isDarkMode: boolean;
  hideProjectDetails: boolean;
  projectName: string;
  copyrightText: string;
  linksText: string[];
  linksLinks: string[];
  technologiesList: string[];
  projectDescriptions: string[];
  imageFilePaths: string[];
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
  imageFilePaths,
  onClickFunction,
}) => {
    let projectNameWithoutSpace = projectName.replace(/\s/g, "");

    let bufferArray: string[] = [];
    imageFilePaths.map((stringValue) => {
      bufferArray.push("./ProjectAssets/" + projectNameWithoutSpace + "/" + stringValue);
    })
    const [imageFiles] = useState<string[]>(bufferArray);

    return (
      <div
        className={
          "z-20 relative min-h-[300px] min-w-[700px] lg:min-w-[400px] mt-4 rounded-md flex lg:items-start flex-col items-center lg:flex-row w-full shadow-md mb-6 " +
          (isDarkMode ? "dark:bg-DarkNeutral-200 shadow-gray-700 shadow-md" : "bg-DarkNeutral-1100 ")
        }
      >
        {/* Project Description + skills and etc. */}
        <div className="flex flex-col items-start pt-3 ml-6 w-full h-[90%] max-w-[499px]">
          <div className="min-w-[90%] lg:w-[30%] w-[95%] items-start">
            <h3
              className={
                "text-2xl font-medium mb-4 " +
                (isDarkMode ? "text-DarkTextColor1" : "text-DarkNeutral-200")
              }
            >
              {projectName}
            </h3>

            <div className="flex flex-row w-full justify-start space-x-2 mb-4 text-sm max-w-[200px]">
              {technologiesList.map((techString: string) => (
                <p
                  key={projectNameWithoutSpace + techString}
                  className={
                    "rounded-lg text-md pl-2 pr-2 pt-1 pb-1 text-center align-middle justify-center " +
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
              <div className="flex flex-row space-x-2 lg:text-start align-middle text-center w-full">
                {linksLinks.map((linkHref: string, index: number) => (
                  // let filePath = '/ProjectAssets/' + projectName + "/" + projectName + "Preview";
                  <a href={linkHref} target="_blank" className="mb-1 text-sm lg:align-bottom lg:items-end underline hover:text-blue-500" key={projectNameWithoutSpace + linkHref.substring(0, linkHref.length > 20 ? 20 : linkHref.length)}>
                    {(hideProjectDetails ? linksText[index] : <img className="max-w-[20%]" src={isDarkMode ? "/ProjectAssets/github-mark-white.png" : "/ProjectAssets/github-mark.png"}></img>)}
                  </a>
                ))}
              </div>
            </div>

            <p className="text-CopyrightColor lg:text-start text-sm italic text-center dark:text-CopyrightColor lg:mt-3 mb-2 mt-2">
              {copyrightText}
            </p>
          </div>
        </div>
        {/* Project image and details button */}
        <div className="lg:max-w-[50%] max-w-[80%] min-w-[50%] flex flex-col">
          <div className="">
            <CarouselDisplay translateXAmount={268.8} imagesToDisplay={imageFiles} isDarkMode={isDarkMode}></CarouselDisplay>
          </div>

          {hideProjectDetails ? (
            <p className="pb-4"></p>
          ) : (
            <button onClick={onClickFunction} className={`w-[100%] hover:underline rounded-sm text-sm border-2 mt-4 mb-4 ${isDarkMode ? "" : "border-black"}`}>
              Project Details
            </button>
          )}
        </div>
      </div>
    );
  };

export default ProjectDescription;
