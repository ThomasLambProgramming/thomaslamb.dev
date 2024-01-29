import Footer from "./Components/Footer";
import GithubCommitDisplay from "./Components/GithubCommitDisplay";
import Header from "./Components/Header";
import ProjectContainer from "./Components/ProjectContainer";
import ProjectModal from "./Components/ProjectModal";
import ProjectDescription from "./Components/ProjectDescription";
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

  const vladTechnologies: string[] = [
    "Console",
    "Monogame",
    "C++",
    "C#"
  ]

  const VladDescription: string[] = [
    "This was my first professional shipped title. I was the programmer in charge of porting the game to Xbox Series/X, Switch, Playstation 4/5, Gog and Epic Games.",
  ]

  document.title = "ThomasLamb.dev"

  //Remove scrollbar so when modal opens it doesnt move everything and it looks cleaner without anyway.
  document.body.classList.add("no-scrollbar");

  return (
    //<div className={isDarkMode ? "dark" : ""}>
      <div className=" bg-light_theme-lighter dark:bg-dark_theme-default w-full h-full no-scrollbar overflow-y-hidden">
        <ProjectModal isShown={isShown} hide={ModalToggled} projectName={projectName}></ProjectModal>
        <button
                  onClick={DarkModeToggled}
                  className="text-white bg-gray-700 hover:bg-gray-800 
                  focus:ring-4 focus:outline-none focus:ring-gray-300 
                  font-medium rounded-lg text-sm w-10% max-w-xl px-5 py-2.5 text-center 
                  dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Toggle Dark Mode = {String(isDarkMode)}
                </button>
        <Header /> 

        <div className="flex flex-row align-middle justify-center content-center items-start w-[100%] bg-gray-400">
            <div className="flex flex-col items-center align-top w-[20%] justify-end mt-10">
              <div className="items-left">
                <h2 className="mt-4 text-lg text-gray-600">Professional Experience</h2>
                <h3 className="">Vlad Circus</h3>
                <h3 className="">Aradena</h3>
                <h3 className="">Biospheres</h3>
                <h3 className="">Homebase</h3>

                <h2 className="mt-4 text-lg text-gray-600">Personal Projects</h2>
                <h3 className="">DirectX 11 Rendering Engine</h3>
                <h3 className="">Maniac Cab</h3>

                <h2 className="mt-4 text-lg text-gray-600">University Projects</h2>
                <h3 className="">Node Graph Generator</h3>
                <h3 className="">Malicious</h3>
                <h3 className="">Rapid Delivery</h3>
                <h3 className="mb-4">Carnival Carnage</h3>
              </div>
              <GithubCommitDisplay isDarkMode={false}/>
            </div>
            <div className="w-[80%] max-w-[1000px]">
              <ProjectDescription projectName="Vlad Circus" technologiesList={vladTechnologies} projectDescriptions={VladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Maniac Cab" technologiesList={vladTechnologies} projectDescriptions={VladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Node Graph Generator" technologiesList={vladTechnologies} projectDescriptions={VladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Vlad Circus" technologiesList={vladTechnologies} projectDescriptions={VladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Vlad Circus" technologiesList={vladTechnologies} projectDescriptions={VladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Vlad Circus" technologiesList={vladTechnologies} projectDescriptions={VladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription>
            </div>
        </div>

        {/* <div className="ml-24 mr-24 flex flex-col justify-center align-middle content-center items-center">
          <ProjectContainer projects={ShippedGames} typeTitle="Shipped Games / Current Projects" projectNameChange={ProjectNameChanged}/> */}
          {/* <ProjectContainer projects={UnrealProjects} typeTitle="Unreal and C++ Projects" projectNameChange={ProjectNameChanged} showTitle={true}/> */}
          {/* <ProjectContainer projects={UnityProjects} typeTitle="Unity Projects" projectNameChange={ProjectNameChanged}/>
        </div> */}
         
        {/* <Footer />  */}
      </div>
    //</div>
  );
}

export default App
