import Footer from "./Components/Footer";
import GithubCommitDisplay from "./Components/GithubCommitDisplay";
import Header from "./Components/Header";
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
    setProjectName(name);
    ModalToggled();
  }

  const vladTechnologies: string[] = 
  [
    "Console",
    "Monogame",
    "C++",
    "C#"
  ]
  const vladDescription: string[] = 
  [
    "This was my first professional shipped title. I was the programmer in charge of porting the game to Xbox Series/X, Switch, Playstation 4/5, Gog and Epic Games.",
  ]


  const rapidDeliveryTech: string[] = 
  [
    "Unity",
    "C#",
  ]
  const rapidDeliveryDesc: string[] = 
  [
    "For my first major project at AIE we created an endless runner where the player must avoid obstacles and fire tea from a cannon to customers.",
  ]


  const directXTech: string[] = 
  [
    "C++",
    "Imgui",
    "Graphics"
  ]
  const directXDesc: string[] = [
    "To learn more about graphics programming and shaders I have been working on a DirectX Renderer with dear Imgui.",
  ]


  const nodeGraphGenTech: string[] = 
  [
    "Unity",
    "C#",
  ]
  const nodeGraphGenDesc: string[] = 
  [
    "Node graph generator that takes in a environment and creates a navigation mesh based off all meshes contained in the environment.",
  ]


  const maniacCabTech: string[] = 
  [
    "Unreal Engine",
    "C++",
  ]
  const maniacCabDesc: string[] = 
  [
    "A Small arcade game that I am currently developing with friends where your character must deliver as many passengers as possible in the shortest amount of time.",
  ]


  const maliciousTech: string[] = 
  [
    "Unity",
    "C#",
  ]
  const maliciousDesc: string[] = 
  [
    "For my 2nd year major project at AIE I worked with a team of 6 other people to produce this robot puzzle platformer.",
  ]


  const isolatorTech: string[] = 
  [
    "Unity",
    "C#",
  ]
  const isolatorDesc: string[] = 
  [
    "This was a small 12 hour game jam that I created with a team that involved some particle effects and interesting design.",
  ]


  const carnivalCarnageTech: string[] = 
  [
    "Unity",
    "C#",
    "VR",
  ]
  const carnivalCarnageDesc: string[] = 
  [
    "I worked with a team of 9 in a small time frame to create this VR arcade game where you smash clown heads with a hammer that can be thrown and recalled like thors hammer.",
  ]


  const bezierCurvesTech: string[] = 
  [
    "Unity",
    "C#",
  ]
  const bezierCurvesDesc: string[] = 
  [
    "Small Bezier curve example to learn tooling and how bezier curves work for future projects",
  ]

  document.title = "ThomasLamb.dev"

  //Remove scrollbar so when modal opens it doesnt move everything and it looks cleaner without anyway.
  document.body.classList.add("no-scrollbar");

  return (
    <div className={isDarkMode ? "dark" : ""}>
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
            <div className="w-[80%] max-w-[1000px] mb-8">
              <ProjectDescription projectName="Vlad Circus" technologiesList={vladTechnologies} projectDescriptions={vladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription>
              {/* <ProjectDescription projectName="Aradena" technologiesList={vladTechnologies} projectDescriptions={vladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription> */}
              {/* <ProjectDescription projectName="Biospheres" technologiesList={vladTechnologies} projectDescriptions={vladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription> */}
              {/* <ProjectDescription projectName="Motogp Manager" technologiesList={vladTechnologies} projectDescriptions={vladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription> */}
              <ProjectDescription projectName="DirectX Renderer" technologiesList={directXTech} projectDescriptions={directXDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Maniac Cab" technologiesList={maniacCabTech} projectDescriptions={maniacCabDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Node Graph Generator" technologiesList={nodeGraphGenTech} projectDescriptions={nodeGraphGenDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Rapid Delivery" technologiesList={rapidDeliveryTech} projectDescriptions={rapidDeliveryDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Carnival Carnage" technologiesList={carnivalCarnageTech} projectDescriptions={carnivalCarnageDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Isolator" technologiesList={isolatorTech} projectDescriptions={isolatorDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              <ProjectDescription projectName="Bezier Curves" technologiesList={bezierCurvesTech} projectDescriptions={bezierCurvesDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
            </div>
        </div>
         
        <Footer /> 
      </div>
    </div>
  );
}

export default App
