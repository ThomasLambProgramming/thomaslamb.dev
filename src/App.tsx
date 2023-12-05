import Footer from "./Components/Footer";
import GithubCommitDisplay from "./Components/GithubCommitDisplay";
import Header from "./Components/Header";
import ProjectContainer from "./Components/ProjectContainer";
import ProjectModal from "./Components/ProjectModal";
import {FC, useState} from "react";

const App: FC = () => {

  const [isShown, setIsShown] = useState<boolean>(false);
  
  const ModalToggled = () => {
    setIsShown(!isShown);
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
    //"OpenGL",
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
    <div className=" bg-pewter-lighter w-full h-full no-scrollbar overflow-y-hidden">
      <ProjectModal isShown={isShown} hide={ModalToggled} projectName={projectName}></ProjectModal>
      <Header /> 
      <div className="ml-24 mr-24 flex flex-col justify-center align-middle content-center items-center">
        <ProjectContainer projects={ShippedGames} typeTitle="Shipped Games / Current Projects" projectNameChange={ProjectNameChanged} showTitle={false}/>
        {/* <ProjectContainer projects={UnrealProjects} typeTitle="Unreal and C++ Projects" projectNameChange={ProjectNameChanged} showTitle={true}/> */}
        <ProjectContainer projects={UnityProjects} typeTitle="Unity Projects" projectNameChange={ProjectNameChanged} showTitle={true}/>
      </div>
      <GithubCommitDisplay /> 
      <Footer /> 
    </div>
  );
}

export default App
