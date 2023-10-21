import Footer from "./Components/Footer";
import GithubCommitDisplay from "./Components/GithubCommitDisplay";
import Header from "./Components/Header";
import ProjectContainer from "./Components/ProjectContainer";

function App() {
  
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
    <div className="bg-slate-100 w-full h-full min-h-screen">
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
