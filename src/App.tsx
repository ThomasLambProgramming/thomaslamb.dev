import ProjectModal from "./Components/ProjectModal";
import ModalExitButton from "./Components/ModalExitButton";
import ProjectDescription from "./Components/ProjectDescription";
import { FC, useState } from "react";
import HeaderBar from "./Components/HeaderBar";
import AboutSection from "./Components/AboutSection";
import {projects} from "./Components/ProjectDescriptionArray.tsx";
import ProjectSelectionSiderbar from "./Components/ProjectSelectionSidebar.tsx";

const App: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const [modalProjectIndex, setModalProjectIndex] = useState(0);

  const ModalToggled = () => {
    setIsShown(!isShown);
  };
  const DarkModeToggled = () => {
    setIsDarkMode(!isDarkMode);
  };

  const aboutMeSectionText: string[] = [
    "Hello, my name is Thomas Lamb. I have been working as a game programmer for just under 2 years. I am eager to learn any form of game programming, with a current interest in graphics and gameplay",
    "Current projects: ", 
    "- A dwarf puzzle game", 
    "- Small opengl engine to test graphics programming such as shadow maps",
  ];

  

  document.title = "ThomasLamb.dev";
  //Remove scrollbar so when modal opens it doesnt move everything and it looks cleaner without anyway.
  document.body.classList.add("no-scrollbar");

  return (
    <div className={isDarkMode ? "dark " : ""}>
      <div id="TopOfPage" className=" bg-Neutral-100 lg dark:bg-DarkNeutral-100 w-full h-full ">

        <ProjectModal isShown={isShown} hide={ModalToggled} darkMode={isDarkMode} index={modalProjectIndex}></ProjectModal>
        <ModalExitButton isShown={isShown} hide={ModalToggled} darkMode={isDarkMode}></ModalExitButton >

        <div className="sticky top-0 z-30">
          <HeaderBar isDarkMode={isDarkMode} DarkModeToggledFunc={DarkModeToggled}></HeaderBar>
        </div>

        <div className="flex flex-col justify-center align-middle content-center items-center w-full">
          <div className="bg-DarkNeutral-1100 dark:bg-DarkNeutral-200 rounded-md flex flex-col justify-center align-middle content-center items-center w-full max-w-[860px] ml-[2px] mt-10 text-DarkNeutralN-100  dark:text-Neutral-0">
            <AboutSection
              isDarkMode={isDarkMode}
              defaultText={aboutMeSectionText}
            ></AboutSection>
          </div>

          <div className="text-DarkNeutralN-100 max-w-[2200px] dark:text-Neutral-0 flex flex-col lg:flex-row align-middle justify-center content-center items-center lg:items-start w-[100%]">
            <ProjectSelectionSiderbar isDarkMode={isDarkMode}/>
            {projects.map((projectInfo , index) => {
                return (
                <ProjectDescription 
                  isDarkMode={isDarkMode} 
                  hideProjectDetails={!projectInfo.hasProjectModal}
                  projectName={projectInfo.projectName}
                  copyrightText={projectInfo.copyRightText}
                  linksLinks={projectInfo.urlLinks}
                  linksText={projectInfo.urlLinkTitles}
                  technologiesList={projectInfo.technologyList}
                  projectDescriptions={projectInfo.projectDescriptions}
                  onClickFunction={() => setModalProjectIndex(index)}
                />
                );
            })}
          </div>

        </div>
      </div>
    </div >
  );
};

export default App;
