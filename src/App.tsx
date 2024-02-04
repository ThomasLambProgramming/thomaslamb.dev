import GithubCommitDisplay from "./Components/GithubCommitDisplay";
import ProjectModal from "./Components/ProjectModal";
import ProjectDescription from "./Components/ProjectDescription";
import {FC, useState} from "react";
import HeaderBar from "./Components/HeaderBar";
import AboutSection from "./Components/AboutSection";

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
  const testText: string[] =
  [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ]

  const vladTech: string[] = 
  [
    "Console",
    "Monogame",
    "C++",
    "C#"
  ]
  const vladDescription: string[] = 
  [
    "In Vlad Circus: Descend into Madness, discover a story full of mystery and pain where every shadow hides a twisted secret or vicious threat, and no one is safe from tragedy.",
    "Experience the chilling story of a 1920s freak circus that burned to the ground, and the grotesque quest to found the circus anew. Follow the tormented Oliver Mills as he struggles to survive and escape.",
  ]
  const vladLink: string[] = 
  [
    "https://store.steampowered.com/app/1702430/Vlad_Circus_Descend_Into_Madness/",
    "https://store.steampowered.com/app/1702430/Vlad_Circus_Descend_Into_Madness/",
    "https://store.steampowered.com/app/1702430/Vlad_Circus_Descend_Into_Madness/",
  ]
  const vladLinkText: string[] = 
  [
    "Steam: ",
    "Steam: ",
    "Steam: ",
  ]

  const aradenaTech: string[] = 
  [
    "Unity",
    "C#",
  ]
  const aradenaDesc: string[] = 
  [
    "Aradena is a free-to-play, Tactical TCG where collectable cards come to life in strategic, 3D gameplay. As a warrior, you'll join a faction and battle other players in the medieval fantasy kingdom.",
  ] 

  const homebaseTech: string[] = 
  [
    "Unity",
    "C#",
  ]
  const homebaseDesc: string[] = 
  [
    "Scholastic Home Base is a safe, free, 3D interactive world that celebrates favorite stories through book-based games, live author events, and a large community of readers.",
  ] 

  const motogpTech: string[] = 
  [
    "Unity",
    "C#",
  ]
  const motogpDesc: string[] = 
  [
    "MotoGP Ignition is a play-to-earn blockchain-based racing management and collectibles game that utilizes the Flow network with its NFT assets and cryptocurrency, REVV.",
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
    <div className={isDarkMode ? "dark " : ""}>
      <div className=" bg-Neutral-100 dark:bg-DarkNeutral-100 w-full h-full no-scrollbar overflow-y-hidden">
        {/* <ProjectModal isShown={isShown} hide={ModalToggled} projectName={projectName}></ProjectModal> */}
        
        <HeaderBar isDarkMode={isDarkMode} DarkModeToggledFunc={DarkModeToggled}></HeaderBar>
        {/* <Header isDarkMode={isDarkMode} />  */}

        <div className="flex flex-col justify-center align-middle content-center items-center w-full">
          <div className="bg-Neutral-400 dark:bg-DarkNeutral-200 rounded-md flex flex-col justify-center align-middle content-center items-center w-full max-w-[1100px] mt-10 text-DarkNeutralN-100  dark:text-Neutral-0">
            <AboutSection isDarkMode={isDarkMode} defaultText={testText}></AboutSection>
          </div>
        
        <div className="text-DarkNeutralN-100 max-w-[2200px]  dark:text-Neutral-0 flex flex-col lg:flex-row align-middle justify-center content-center items-center lg:items-start w-[100%] bg-gray-400">
            <div className="flex flex-col items-start align-top lg:w-[20%] lg:max-w-[220px] lg:justify-end justify-center mt-10 ">
              <div className="items-left flex flex-row lg:flex-col space-x-5 w-full lg:space-x-0 ml-2 lg:justify-normal lg:align-start justify-center align-middle">
                
                <div className="flex flex-col">
                  <h2 className={"mt-4 text-md text-gray-600 "+ (isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>Professional Experience</h2>
                  <a href="#Vlad" className="text-sm">Vlad Circus</a>
                  <a href="#Aradena" className="text-sm">Aradena</a>
                  <a href="#Homebase" className="text-sm">Homebase</a>
                  <a href="#Motogp" className="text-sm">Motogp: Ignition</a>
                </div>

                <div className="flex flex-col">
                  <h2 className={"mt-4 text-md text-gray-600 " + (isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>Personal Projects</h2>
                  <a href="#DirectX" className="text-sm">DirectX 11 Renderer</a>
                  <a href="#Maniac" className="text-sm">Maniac Cab</a>
                </div>

                <div className="flex flex-col">
                  <h2 className={"mt-4 text-md text-gray-600 "+ (isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>University Projects</h2>
                  <a href="#Node" className="text-sm">Node Graph Generator</a>
                  <a href="#Malicious" className="text-sm">Malicious</a>
                  <a href="#Rapid" className="text-sm">Rapid Delivery</a>
                  <a href="#Carnival" className="mb-4 text-sm">Carnival Carnage</a>
                </div>

              </div>
              <GithubCommitDisplay isDarkMode={isDarkMode}/>
            </div>

            <div className="w-[80%] max-w-[880px] mb-8 mt-14">
              
              <h1 className="text-2xl">Professional Projects</h1>
              <h3 className="text-2xl">These are the projects that I have worked on under a professional capacity</h3>

              <div id="Vlad">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="All rights to Blowfish studios and Diego" hideProjectDetails={true} isDarkMode={isDarkMode} projectName="Vlad Circus" technologiesList={vladTech} projectDescriptions={vladDescription} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>

              <div id="Aradena">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="All rights to Aradena.io" hideProjectDetails={true} isDarkMode={isDarkMode} projectName="Aradena" technologiesList={aradenaTech} projectDescriptions={aradenaDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>
      
              <div id="Homebase">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="All rights to scholastic"hideProjectDetails={true} isDarkMode={isDarkMode} projectName="Homebase" technologiesList={homebaseTech} projectDescriptions={homebaseDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>

              <div id="Motogp">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="All rights to motogp"hideProjectDetails={true} isDarkMode={isDarkMode} projectName="Motogp Ignition" technologiesList={motogpTech} projectDescriptions={motogpDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>

              <h1 className="mt-12 text-2xl">Personal Projects</h1>
              <h3 className="text-2xl">These are the projects that I am currently working on</h3>

              <div id="Maniac">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="" hideProjectDetails={false} isDarkMode={isDarkMode} projectName="Maniac Cab" technologiesList={maniacCabTech} projectDescriptions={maniacCabDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>

              <div id="DirectX">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="" hideProjectDetails={false} isDarkMode={isDarkMode} projectName="DirectX Renderer" technologiesList={directXTech} projectDescriptions={directXDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>

              <h1 className="mt-12 text-2xl">University/Gamejam Projects</h1>
              <h3 className="text-2xl">Projects that I made during my time at aie</h3>

              <div id="Node">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="" hideProjectDetails={false} isDarkMode={isDarkMode} projectName="Node Graph Generator" technologiesList={nodeGraphGenTech} projectDescriptions={nodeGraphGenDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>

              <div id="Malicious">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="" hideProjectDetails={false} isDarkMode={isDarkMode} projectName="Malicious" technologiesList={maliciousTech} projectDescriptions={maliciousDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>

              <div id="Rapid">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="" hideProjectDetails={false} isDarkMode={isDarkMode} projectName="Rapid Delivery" technologiesList={rapidDeliveryTech} projectDescriptions={rapidDeliveryDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>

              <div id="Carnival">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="" hideProjectDetails={false} isDarkMode={isDarkMode} projectName="Carnival Carnage" technologiesList={carnivalCarnageTech} projectDescriptions={carnivalCarnageDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>

              <div id="#Isolator">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="" hideProjectDetails={false} isDarkMode={isDarkMode} projectName="Isolator" technologiesList={isolatorTech} projectDescriptions={isolatorDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>

              <div id="Bezier">
                <ProjectDescription linksLinks={vladLink} linksText={vladLinkText} copyrightText="" hideProjectDetails={false} isDarkMode={isDarkMode} projectName="Bezier Curves" technologiesList={bezierCurvesTech} projectDescriptions={bezierCurvesDesc} onClickFunction={ProjectNameChanged}></ProjectDescription>
              </div>                
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App
