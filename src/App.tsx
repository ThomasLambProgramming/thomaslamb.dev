import Footer from "./Components/Footer";
import GithubCommitDisplay from "./Components/GithubCommitDisplay";
import Header from "./Components/Header";
import ProjectContainer from "./Components/ProjectContainer";
import ProjectModal from "./Components/ProjectModal";
import {FC, useState, useEffect} from "react";

let previousYValue: number = 0;

const App: FC = () => {

  const [isShown, setIsShown] = useState<boolean>(false);
  const ModalToggled = () => {
    setIsShown(!isShown);

    //Set fixed on the opposite value since the setIsShown hasnt actually flipped the value yet.
    if (isShown == true)
    {
      setContainerClasses(containerClasses.replace(" fixed",''));
    }
    else
    {
      setContainerClasses(containerClasses + " fixed");
    }
  }
  
  useEffect(() => {
    window.scrollTo(0, previousYValue);
    document.body.style.top = '-${window.scrollY}px';
  })

  const [containerClasses, setContainerClasses] = useState<string>(
    "bg-slate-100 w-full h-full no-scrollbar overflow-y-clip"
  );
  
  const [projectName, setProjectName] = useState<string>("");
  const ProjectNameChanged = (name: string) => {
    previousYValue = window.scrollY;
    setProjectName(name);
    ModalToggled();
  }

  //Each project name will be used as a folder path eg Assets/ComplexGames/...
  //String gets spaces removed but will need the name to show as the title
  //there will be a markdown of the same name as title eg ComplexGames.md
  //that will give the text and where to place the images.
  const ShippedGames: string[] = [
    "Vlad Circus"
  ];

  // const UnrealProjects: string[] = [
  //   "Maniac Cab",
  // ];
  //  const EngineProjects: string[] = [
  //   "Custom Vulkan Engine"
  // ];
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
    <div className={containerClasses}>
      <ProjectModal isShown={isShown} hide={ModalToggled} projectName={projectName}></ProjectModal>
      <Header /> 
      <ProjectContainer projects={ShippedGames} typeTitle="Shipped Games" projectNameChange={ProjectNameChanged} showTitle={false}/>
      {/* <ProjectContainer projects={UnrealProjects} typeTitle="Unreal Projects" projectNameChange={ProjectNameChanged}/> */}
      {/* <ProjectContainer projects={EngineProjects} typeTitle="Engine Projects" projectNameChange={ProjectNameChanged}/> */}
      <ProjectContainer projects={UnityProjects} typeTitle="Unity Projects" projectNameChange={ProjectNameChanged} showTitle={true}/>
      <GithubCommitDisplay /> 
      <Footer /> 
    </div>
  );
}

export default App
