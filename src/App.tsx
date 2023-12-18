import Footer from "./Components/Footer";
import GithubCommitDisplay from "./Components/GithubCommitDisplay";
import Header from "./Components/Header";
import ProjectContainer from "./Components/ProjectContainer";
import ProjectModal from "./Components/ProjectModal";
import {FC, useState} from "react";

const App: FC = () => {

  const [isShown, setIsShown] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const ModalToggled = () => {
    setIsShown(!isShown);
  }
  const DarkModeToggled = () => {
    setIsDarkMode(!isDarkMode);
  }

  const [projectName, setProjectName] = useState<string>("");
  const ProjectNameChanged = (name: string) => {
    //previousYValue = window.scrollY;
    setProjectName(name);
    ModalToggled();
  }

  //Each project name will be used as a folder path eg Assets/ComplexGames/...
  //String gets spaces removed but will need the name to show as the title
  //there will be a markdown of the same name as title eg ComplexGames.md
  //that will give the text and where to place the images.
  const ShippedGames: string[] = [
    "Vlad Circus",
    "Maniac Cab",
  ];

  //const UnrealProjects: string[] = [
    //"Direct X Renderer",
    //"Alchemist"
  //];

  const UnityProjects: string[] = [
    "Bezier Curves",
    "Node Graph Generator",
    "Isolator",
    "Malicious",
    "Rapid Delivery",
    "Carnival Carnage"
  ];

  document.title = "ThomasLamb.dev"

  //Remove scrollbar so when modal opens it doesnt move everything and it looks cleaner without anyway.
  document.body.classList.add("no-scrollbar");

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className=" bg-light_theme-lighter dark:bg-dark_theme-default w-full h-full no-scrollbar overflow-y-hidden">
        <ProjectModal isShown={isShown} hide={ModalToggled} projectName={projectName}></ProjectModal>
        {/* <button
                  onClick={DarkModeToggled}
                  className="text-white bg-gray-700 hover:bg-gray-800 
                  focus:ring-4 focus:outline-none focus:ring-gray-300 
                  font-medium rounded-lg text-sm w-10% max-w-xl px-5 py-2.5 text-center 
                  dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Toggle Dark Mode
                </button> */}
        <Header /> 
        <div className="ml-24 mr-24 flex flex-col justify-center align-middle content-center items-center">
          <ProjectContainer projects={ShippedGames} typeTitle="Shipped Games / Current Projects" projectNameChange={ProjectNameChanged}/>
          {/* <ProjectContainer projects={UnrealProjects} typeTitle="Unreal and C++ Projects" projectNameChange={ProjectNameChanged} showTitle={true}/> */}
          <ProjectContainer projects={UnityProjects} typeTitle="Unity Projects" projectNameChange={ProjectNameChanged}/>
        </div>
        <GithubCommitDisplay isDarkMode={isDarkMode}/> 
        <Footer /> 
      </div>
    </div>
  );
}

export default App
