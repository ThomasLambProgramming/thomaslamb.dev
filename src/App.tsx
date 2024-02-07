import GithubCommitDisplay from "./Components/GithubCommitDisplay";
import ProjectModal from "./Components/ProjectModal";
import ProjectDescription from "./Components/ProjectDescription";
import { FC, useState, useEffect } from "react";
import HeaderBar from "./Components/HeaderBar";
import AboutSection from "./Components/AboutSection";
import DynamicHeight from "./Components/DynamicHeight";

const App: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const ModalToggled = () => {
    setIsShown(!isShown);
  };
  const DarkModeToggled = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [projectName, setProjectName] = useState<string>("");
  const ProjectNameChanged = (name: string) => {
    setProjectName(name);
    ModalToggled();
  };

  const testText: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Loraem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];

  document.title = "ThomasLamb.dev";

  //Remove scrollbar so when modal opens it doesnt move everything and it looks cleaner without anyway.
  document.body.classList.add("no-scrollbar");

  
  const handleScroll = () => {
      let position = window.scrollY;
      position -= 270;
      //Limiting so the scroll doesnt just go on forever.
      if (window.innerWidth < 1024)
        position = 0;
      
      if (position < 0)
      {
        position = 0;
        if (position != heightOffset)
          setHeightOffset(position);
        return;
      }

      
      setHeightOffset(position);
  };

  const [heightOffset, setHeightOffset] = useState<Number>(0);

  useEffect(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [heightOffset]);

  return (
    <div className={isDarkMode ? "dark " : ""}>
      <div id="TopOfPage" className=" bg-Neutral-100 lg dark:bg-DarkNeutral-100 w-full h-full no-scrollbar overflow-y-hidden">
        {/* <ProjectModal isShown={isShown} hide={ModalToggled} projectName={projectName}></ProjectModal> */}
        <HeaderBar isDarkMode={isDarkMode} DarkModeToggledFunc={DarkModeToggled}></HeaderBar>
        
        {/* This px div is about to be used for some horrifically cursed things. */}
        
        
        <div className="flex flex-col justify-center align-middle content-center items-center w-full">
          <div className="bg-DarkNeutral-1100 dark:bg-DarkNeutral-200 rounded-md flex flex-col justify-center align-middle content-center items-center w-full max-w-[1100px] mt-10 text-DarkNeutralN-100  dark:text-Neutral-0">
            <AboutSection
              isDarkMode={isDarkMode}
              defaultText={testText}
            ></AboutSection>
          </div>

          <div className="text-DarkNeutralN-100 max-w-[2200px]  dark:text-Neutral-0 flex flex-col lg:flex-row align-middle justify-center content-center items-center lg:items-start w-[100%] bg-gray-400">
            <div className="flex flex-col items-start align-top lg:w-[20%] lg:max-w-[220px] lg:justify-end justify-center mt-10 ">
              <div className="items-left flex flex-row lg:flex-col space-x-5 w-full lg:space-x-0 ml-2 lg:justify-normal lg:align-start justify-center align-middle">
                
                <div className={`flex flex-col`}>
                  {/* {pixelOffset.map((number: Number, index: number) => <div key={`${number} ${index}`} style={{height:`${400}px`}}className={`opacity-0`}></div>) } */}
                  <div style={{height:`${heightOffset}px`}}></div>
                  <h2 className={"mt-4 text-md text-gray-600 " + (isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
                    Professional Experience
                  </h2>
                  <a href="#TopOfPage" className="text-sm">Vlad Circus</a>
                  <a href="#Vlad" className="text-sm">Aradena</a>
                  <a href="#Aradena" className="text-sm">Homebase</a>
                  <a href="#Homebase" className="text-sm">Motogp: Ignition</a>
                </div>

                <div className="flex flex-col">
                  <h2 className={"mt-4 text-md text-gray-600 " + (isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
                    Personal Projects
                  </h2>
                  <a href="#Motogp" className="text-sm">
                    Maniac Cab
                  </a>
                  <a href="#Maniac" className="text-sm">
                    DirectX 11 Renderer
                  </a>
                </div>

                <div className="flex flex-col">
                  <h2 className={"mt-4 text-md text-gray-600 " + (isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
                    University Projects
                  </h2>
                  <a href="#DirectX" className="text-sm">
                    Node Graph Generator
                  </a>
                  <a href="#Node" className="text-sm">
                    Malicious
                  </a>
                  <a href="#Malicious" className="text-sm">
                    Rapid Delivery
                  </a>
                  <a href="#RapidDelivery" className="mb-4 text-sm">
                    Carnival Carnage
                  </a>
                </div>
              </div>
              <GithubCommitDisplay isDarkMode={isDarkMode} />
            </div>

            <div className="w-[80%] max-w-[880px] mb-8 mt-14">
              <h1 className="text-2xl">Professional Projects</h1>

              <div id="Vlad">
                <ProjectDescription
                  linksLinks={[
                    "https://store.steampowered.com/app/1702430/Vlad_Circus_Descend_Into_Madness/",
                    "https://store.epicgames.com/en-US/p/vlad-circus-descend-into-madness-9d1ed2",
                    "https://ec.nintendo.com/AU/en/titles/70010000045531",
                    "https://www.xbox.com/en-US/games/store/vlad-circus-descend-into-madness/9ns2rvcmxh60",
                    "https://store.playstation.com/en-us/product/UP5552-CUSA30287_00-9071855390281250",
                  ]}
                  linksText={["Steam", "Epic Games Store", "Switch", "Xbox", "Playstation",]}
                  copyrightText="Copyright © 2022 Indiesruption. All Rights Reserved."
                  hideProjectDetails={true}
                  isDarkMode={isDarkMode}
                  projectName="Vlad Circus"
                  technologiesList={["Console", "Monogame", "C++", "C#"]}
                  projectDescriptions={[
                    "In Vlad Circus: Descend into Madness, discover a story full of mystery and pain where every shadow hides a twisted secret or vicious threat, and no one is safe from tragedy.",
                    "Experience the chilling story of a 1920s freak circus that burned to the ground, and the grotesque quest to found the circus anew. Follow the tormented Oliver Mills as he struggles to survive and escape.",
                    "Below are the links to each store that Blowfish published to.",
                  ]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <div id="Aradena">
                <ProjectDescription
                  linksLinks={["https://aradena.io/home/"]}
                  linksText={["Aradena.io"]}
                  copyrightText="Copyright © 2024 Aradena. All Rights Reserved."
                  hideProjectDetails={true}
                  isDarkMode={isDarkMode}
                  projectName="Aradena"
                  technologiesList={["Unity", "C#"]}
                  projectDescriptions={["Aradena is a free-to-play, Tactical TCG where collectable cards come to life in strategic, 3D gameplay. As a warrior, you'll join a faction and battle other players in the medieval fantasy kingdom."]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <div id="Homebase">
                <ProjectDescription
                  linksLinks={[
                  "https://kids.scholastic.com/kid/homebase/",
                  "https://play.google.com/store/apps/details?id=com.scholastic.HomeBase&hl=en&gl=US&pli=1",
                  "https://apps.apple.com/us/app/home-base-by-scholastic/id1450869907",]}
                  linksText={["Homebase Website", "Google Play Store", "Apple App Store",]}
                  copyrightText="TM ® & © 2024 Scholastic Inc. All Rights Reserved."
                  hideProjectDetails={true}
                  isDarkMode={isDarkMode}
                  projectName="Homebase"
                  technologiesList={["Unity", "C#"]}
                  projectDescriptions={["Scholastic Home Base is a safe, free, 3D interactive world that celebrates favorite stories through book-based games, live author events, and a large community of readers."]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <div id="Motogp">
                <ProjectDescription
                  linksLinks={["https://motogp-ignition.com/"]}
                  linksText={["Motogp-Ignition.com"]}
                  copyrightText="An official product of the MotoGP™ logo and related marks are trade marks. All rights reserved. Copyright © 2023 ANIMOCA BRANDS LIMITED, ALL RIGHTS RESERVED. MotoGP™ Ignition © 2023 DORNA"
                  hideProjectDetails={true}
                  isDarkMode={isDarkMode}
                  projectName="Motogp Ignition"
                  technologiesList={["Unity", "C#"]}
                  projectDescriptions={["MotoGP Ignition is a play-to-earn blockchain-based racing management and collectibles game that utilizes the Flow network with its NFT assets and cryptocurrency, REVV."]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <h1 className="mt-20 text-2xl">Personal Projects</h1>
              <h3 className="text-lg">In Development Projects</h3>

              <div id="Maniac">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/ManiacCab"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Maniac Cab"
                  technologiesList={["Unreal", "C++"]}
                  projectDescriptions={["A Small arcade game that I am currently developing with friends where your character must deliver as many passengers as possible in the shortest amount of time.",]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <div id="DirectX">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/DirectXRenderer"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="DirectX Renderer"
                  technologiesList={["C++", "Imgui", "Graphics"]}
                  projectDescriptions={["To learn more about graphics programming and shaders I have been working on a DirectX Renderer with dear Imgui.",]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <h1 className="mt-20 text-2xl">University/Gamejam Projects</h1>

              <div id="Node">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/NodeGraph"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Node Graph Generator"
                  technologiesList={["Unity", "C#"]}
                  projectDescriptions={["Node graph generator that takes in a environment and creates a navigation mesh based off all meshes contained in the environment.",]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <div id="Malicious">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/MaliciousVisionQuest"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Malicious"
                  technologiesList={["Unity", "C#"]}
                  projectDescriptions={["For my 2nd year major project at AIE I worked with a team of 6 other people to produce this robot puzzle platformer.",]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <div id="RapidDelivery">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/RapidDelivery"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Rapid Delivery"
                  technologiesList={["Unity", "C#"]}
                  projectDescriptions={["For my first major project at AIE we created an endless runner where the player must avoid obstacles and fire tea from a cannon to customers.",]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <div id="Carnival">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/Carnival-Carnage"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Carnival Carnage"
                  technologiesList={["Unity", "C#", "VR"]}
                  projectDescriptions={["I worked with a team of 9 in a small time frame to create this VR arcade game where you smash clown heads with a hammer that can be thrown and recalled like thors hammer.",]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <div id="Isolator">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/Isolator"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Isolator"
                  technologiesList={["Unity", "C#"]}
                  projectDescriptions={["This was a small 12 hour game jam that I created with a team that involved some particle effects and interesting design.",]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>

              <div id="BezierCurves">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/UnityGraphics"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Bezier Curves"
                  technologiesList={["Unity", "C#"]}
                  projectDescriptions={[ "Small Bezier curve example to learn tooling and how bezier curves work for future projects",]}
                  onClickFunction={ProjectNameChanged}
                ></ProjectDescription>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
