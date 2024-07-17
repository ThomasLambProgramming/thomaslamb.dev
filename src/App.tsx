import ProjectModal from "./Components/ProjectModal";
import ModalExitButton from "./Components/ModalExitButton";
import ProjectDescription from "./Components/ProjectDescription";
import { FC, useState } from "react";
import HeaderBar from "./Components/HeaderBar";
import AboutSection from "./Components/AboutSection";
import { projects, ProjectType } from "./Components/ProjectDescriptionArray.tsx";
import ProjectSelectionSiderbar from "./Components/ProjectSelectionSidebar.tsx";


const App: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [modalProjectName, setModalProjectName] = useState<string>("");
  const [projectSeparatorTitleClass] = useState<string>("mt-20 text-2xl underline dark:text-DarkNeutral-300");

  //From the central project description array separate array into project types so navbar links + sorting can be done without
  //manually editing each element.
  let activeProjectBuffer: string[] = [];
  let professionalProjectBuffer: string[] = [];
  let previousProjectBuffer: string[] = [];
  let techDemoProjectBuffer: string[] = [];
  let aieProjectBuffer: string[] = [];

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectType == ProjectType.ActiveProject)
      activeProjectBuffer.push(projects[i].projectName);
    if (projects[i].projectType == ProjectType.ProfessionalProject)
      professionalProjectBuffer.push(projects[i].projectName);
    if (projects[i].projectType == ProjectType.PreviousProject)
      previousProjectBuffer.push(projects[i].projectName);
    if (projects[i].projectType == ProjectType.TechDemo)
      techDemoProjectBuffer.push(projects[i].projectName);
    if (projects[i].projectType == ProjectType.AieProject)
      aieProjectBuffer.push(projects[i].projectName);
  }

  const [activeProjectNames] = useState<string[]>(activeProjectBuffer)
  const [professionalProjectNames] = useState<string[]>(professionalProjectBuffer);
  const [previousProjectNames] = useState<string[]>(previousProjectBuffer);
  const [techDemoProjectNames] = useState<string[]>(techDemoProjectBuffer);
  const [aieProjectNames] = useState<string[]>(aieProjectBuffer);

  const ModalToggled = () => {
    setIsShown(!isShown);
  };
  const DarkModeToggled = () => {
    setIsDarkMode(!isDarkMode);
  };
  const ProjectDetailsButtonPressed = (projectName: string) => {
    setModalProjectName(projectName);
    ModalToggled();
  }

  //Remove scrollbar so when modal opens it doesnt move everything and it looks cleaner without anyway.
  document.body.classList.add("no-scrollbar");
  document.title = "ThomasLamb.dev";

  return (
    <div className={isDarkMode ? "dark " : ""}>
      <div id="TopOfPage" className=" bg-Neutral-100 lg dark:bg-DarkNeutral-100 w-full h-full ">

        <ProjectModal isShown={isShown} hide={ModalToggled} darkMode={isDarkMode} projectName={modalProjectName}></ProjectModal>
        <ModalExitButton isShown={isShown} hide={ModalToggled} darkMode={isDarkMode}></ModalExitButton >

        <div className="sticky top-0 z-30">
          <HeaderBar isDarkMode={isDarkMode} DarkModeToggledFunc={DarkModeToggled}></HeaderBar>
        </div>

        <div className="flex flex-col justify-center align-middle content-center items-center w-full">
          <div className="bg-DarkNeutral-1100 dark:bg-DarkNeutral-200 rounded-md flex flex-col justify-center align-middle content-center items-center w-full max-w-[860px] ml-[2px] mt-10 text-DarkNeutralN-100  dark:text-Neutral-0">
            <AboutSection
              isDarkMode={isDarkMode}
            ></AboutSection>
          </div>

          <div className="text-DarkNeutralN-100 max-w-[2600px] dark:text-Neutral-0 flex flex-col lg:flex-row align-middle justify-center content-center items-center lg:items-start w-[100%]">
            <ProjectSelectionSiderbar
              isDarkMode={isDarkMode}
              activeProjects={activeProjectNames}
              professionalProjects={professionalProjectNames}
              previousProjects={previousProjectNames}
              techDemoProjects={techDemoProjectNames}
              aieProjects={aieProjectNames}
            />
            <div className="max-w-4xl">
              {projects.map((projectInfo, index) => {
                return (
                  <div id={projectInfo.projectName} key={projectInfo.projectName + "ProjectDescription"}>
                    {/* I am not happy using this method but it stops me from having multiple ProjectDescription component declares */}
                    {index === 0 ? <h1 className={projectSeparatorTitleClass}>Professional Experience</h1> : <div></div>}
                    {index === (professionalProjectNames.length) ? <h1 className={projectSeparatorTitleClass}>Active Projects</h1> : <div></div>}
                    {index === (professionalProjectNames.length + activeProjectNames.length) ? <h1 className={projectSeparatorTitleClass}>Previous Projects</h1> : <div></div>}
                    {index === (professionalProjectNames.length + activeProjectNames.length + previousProjectNames.length) ? <h1 className={projectSeparatorTitleClass}>Tech Demos</h1> : <div></div>}
                    {index === (professionalProjectNames.length + activeProjectNames.length + previousProjectNames.length + techDemoProjectNames.length) ? <h1 className={projectSeparatorTitleClass}>University Projects</h1> : <div></div>}
                    <ProjectDescription
                      isDarkMode={isDarkMode}
                      hideProjectDetails={!projectInfo.hasProjectModal}
                      projectName={projectInfo.projectName}
                      copyrightText={projectInfo.copyRightText}
                      linksLinks={projectInfo.urlLinks}
                      linksText={projectInfo.urlLinkTitles}
                      technologiesList={projectInfo.technologyList}
                      projectDescriptions={projectInfo.projectDescriptions}
                      imageFilePaths={projectInfo.carouselImageNames}
                      onClickFunction={() => ProjectDetailsButtonPressed(projectInfo.projectName)}
                    />
                  </div>
                );
              })}
              <div className=" h-[800px]">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default App;
