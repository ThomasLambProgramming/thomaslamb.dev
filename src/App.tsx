import Footer from "./Components/Footer";
import GithubCommitDisplay from "./Components/GithubCommitDisplay";
import Header from "./Components/Header";
import ProjectContainer from "./Components/ProjectContainer";

function App() {
  


  return (
    <div className="bg-slate-100 w-full h-full min-h-screen">
    <Header /> 
    <ProjectContainer projectType="Unreal"></ProjectContainer>
    <ProjectContainer projectType="Engine Programming"></ProjectContainer>
    <ProjectContainer projectType="Unity"></ProjectContainer>
    <GithubCommitDisplay />
    <Footer /> 
    </div>
  );
}

export default App
