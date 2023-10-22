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
    if (isShown == true)
    {
      document.body.classList.add("overflow:hidden")
    }
    else
    {
      document.body.classList.remove("no-scroll")
    }
  }
  const [projectName, setProjectName] = useState<string>("");
  const ProjectNameChanged = (name: string) => setProjectName(name);

  //Each project name will be used as a folder path eg Assets/ComplexGames/...
  //String gets spaces removed but will need the name to show as the title
  //there will be a markdown of the same name as title eg ComplexGames.md
  //that will give the text and where to place the images.
  const UnrealProjects: string[] = [
    "Bezier",
    "Complex",
    "Game Jam",
    "Malicious",
    "Rapid Delivery",
    "Vr Project"
  ];
   const EngineProjects: string[] = [
    "Bezier",
    "Complex",
    "Game Jam",
    "Malicious",
    "Rapid Delivery",
    "Vr Project"
  ];
   const UnityProjects: string[] = [
    "Bezier",
    "Complex",
    "Game Jam",
    "Malicious",
    "Rapid Delivery",
    "Vr Project"
  ];

  return (
    <div className="bg-slate-100 w-full h-full min-h-screen overflow-y-clip">
      <ProjectModal isShown={isShown} hide={ModalToggled}></ProjectModal>
      <button onClick={ModalToggled}>Press Me!</button>
      <Header /> 
      <ProjectContainer projects={UnrealProjects} typeTitle="Unreal Projects"/>
      <ProjectContainer projects={EngineProjects} typeTitle="Engine Projects"/>
      <ProjectContainer projects={UnityProjects} typeTitle="Unity Projects"/>
      <GithubCommitDisplay /> 
      <Footer /> 
    </div>
  );
}

export default App
