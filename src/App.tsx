import GithubCommitDisplay from "./Components/GithubCommitDisplay";
import ProjectModal from "./Components/ProjectModal";
import ModalExitButton from "./Components/ModalExitButton";
import ProjectDescription from "./Components/ProjectDescription";
import { FC, useState } from "react";
import HeaderBar from "./Components/HeaderBar";
import AboutSection from "./Components/AboutSection";

const App: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const [modalProjectIndex, setModalProjectIndex] = useState(0);

  const ModalToggled = () => {
    setIsShown(!isShown);
  };
  const DarkModeToggled = () => {
    setIsDarkMode(!isDarkMode);
  };

  const aboutMeSectionText: string[] = [
    "Hello, my name is Thomas Lamb. I have been working as a game programmer for just under 2 years. I am eager to learn any form of programming that is associated with games from AI (enemy ai not generative ai) to rendering apis/shaders",
    "I am currently working on two projects: a cross platform game engine using multiple rendering apis (DirectX11, Opengl, Vulkan) and a humor filled multiplayer fishing game",
  ];

  document.title = "ThomasLamb.dev";

  //Remove scrollbar so when modal opens it doesnt move everything and it looks cleaner without anyway.
  //
  document.body.classList.add("no-scrollbar");


  //style={{ height: `${heightOffset}px` }}
  return (
    <div className={isDarkMode ? "dark " : ""}>
      <div id="TopOfPage" className=" bg-Neutral-100 lg dark:bg-DarkNeutral-100 w-full h-full ">

        <ProjectModal isShown={isShown} hide={ModalToggled} darkMode={isDarkMode} index={modalProjectIndex}></ProjectModal>
        <ModalExitButton isShown={isShown} hide={ModalToggled} darkMode={isDarkMode}></ModalExitButton >

        <div className="sticky top-0 z-30">
          <HeaderBar isDarkMode={isDarkMode} DarkModeToggledFunc={DarkModeToggled}></HeaderBar>
        </div>

        <div className="flex flex-col justify-center align-middle content-center items-center w-full">
          <div className="bg-DarkNeutral-1100 dark:bg-DarkNeutral-200 rounded-md flex flex-col justify-center align-middle content-center items-center w-full max-w-[860px] ml-[2px] mt-10 text-DarkNeutralN-100  dark:text-Neutral-0">
            <AboutSection
              isDarkMode={isDarkMode}
              defaultText={aboutMeSectionText}
            ></AboutSection>
          </div>

          <div className="text-DarkNeutralN-100 max-w-[2200px] dark:text-Neutral-0 flex flex-col lg:flex-row align-middle justify-center content-center items-center lg:items-start w-[100%]">
            <div className="flex flex-col sticky top-20 lg:w-[20%] lg:max-w-[220px] mt-10 ">
              <div className="flex flex-row lg:flex-col space-x-5 w-full lg:space-x-0 ml-2 ">
                <div className={`flex flex-col `}>
                  <h2 className={"mt-4 text-md " + (isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
                    Professional Experience
                  </h2>
                  <a href="#TopOfPage" className="text-sm hover:underline">Vlad Circus</a>
                  <a href="#Vlad" className="text-sm hover:underline">Aradena</a>
                  <a href="#Aradena" className="text-sm hover:underline">Homebase</a>
                  <a href="#Homebase" className="text-sm hover:underline">Motogp: Ignition</a>
                </div>

                <div className="flex flex-col">
                  <h2 className={"mt-4 text-md " + (isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
                    Personal Projects
                  </h2>
                  <a href="#Motogp" className="text-sm hover:underline">Fishing Wizard</a>
                  <a href="#FishingWizard" className="text-sm hover:underline">Maniac Cab</a>
                  {/*<a href="#Maniac" className="text-sm hover:underline">Raccoon Engine</a>*/}
                  <a href="#Maniac" className="text-sm hover:underline">Opengl Renderer</a>
                  <a href="#OpenglRenderer" className="text-sm hover:underline">DirectX Renderer</a>
                </div>

                <div className="flex flex-col">
                  <h2 className={"mt-4 text-md " + (isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
                    Tech Demos
                  </h2>
                  <a href="#DirectXRenderer" className="text-sm hover:underline">Infinite Hallway</a>
                  <a href="#InfiniteHallway" className="text-sm hover:underline">Bezier Curves</a>
                </div>

                <div className="flex flex-col">
                  <h2 className={"mt-4 text-md " + (isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
                    University Projects
                  </h2>
                  <a href="#BezierCurves" className="text-sm hover:underline">Node Graph Generator</a>
                  <a href="#Node" className="text-sm hover:underline">Malicious</a>
                  <a href="#Malicious" className="text-sm hover:underline">Rapid Delivery</a>
                  <a href="#RapidDelivery" className="text-sm hover:underline">Carnival Carnage</a>
                  <a href="#Isolator" className="text-sm hover:underline">Isolator</a>
                </div>
              </div>
              <GithubCommitDisplay isDarkMode={isDarkMode} />
            </div>

            <div className="w-[70%] max-w-[640px] mb-8 mt-14">
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
                  linksText={["Steam", "Epic Games", "Switch", "Xbox", "Playstation",]}
                  copyrightText="Copyright © 2022 Indiesruption. All Rights Reserved."
                  hideProjectDetails={true}
                  isDarkMode={isDarkMode}
                  projectName="Vlad Circus"
                  technologiesList={["Console", "Monogame", "C++", "C#"]}
                  projectDescriptions={[
                    "In Vlad Circus: Descend into Madness, discover a story full of mystery and pain where every shadow hides a twisted secret or vicious threat, and no one is safe from tragedy.",
                    //"Experience the chilling story of a 1920s freak circus that burned to the ground, and the grotesque quest to found the circus anew. Follow the tormented Oliver Mills as he struggles to survive and escape.",
                  ]}
                  onClickFunction={() => setModalProjectIndex(0)}
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
                  onClickFunction={() => setModalProjectIndex(1)}
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
                  onClickFunction={() => setModalProjectIndex(2)}
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
                  onClickFunction={() => setModalProjectIndex(3)}
                ></ProjectDescription>
              </div>

              <h1 className="mt-20 text-2xl">Personal Projects</h1>
              <h3 className="text-lg">In Development Projects</h3>

              <div id="FishingWizard">
                <ProjectDescription
                  linksLinks={["https://github.com/AberrationGames/FishingWizard"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Fishing Wizard"
                  technologiesList={["C#", "Multiplayer", "Shaders", "Unity"]}
                  projectDescriptions={["Myself and a few friends have been working on a humor filled fishing adventure game where you and up to 3 friends must use a magical fishing rod to overcome puzzles and challenges",]}

                  onClickFunction={() => {
                    setModalProjectIndex(6);
                    ModalToggled();
                  }}

                ></ProjectDescription>
              </div>

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
                  onClickFunction={() => {
                    setModalProjectIndex(4);
                    ModalToggled();
                  }}
                ></ProjectDescription>
              </div>

              {/*<div id="GraphicsEngine">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/GraphicsEngine"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Graphics Engine"
                  technologiesList={["C++", "Imgui", "Dx11", "Opengl", "Vulkan"]}
                  projectDescriptions={["While working on a directx11 and opengl renderer I wanted to try and merge the two together to attempt cross platform building with opengl for linux while using directx11 for windows.",]}

                  onClickFunction={() => {
                    setModalProjectIndex(7);
                    ModalToggled();
                  }}

                ></ProjectDescription>
              </div> */}

              <div id="OpenglRenderer">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/GraphicsAIE"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Opengl Renderer"
                  technologiesList={["C++", "Imgui", "Graphics", "Opengl"]}
                  projectDescriptions={["I made a small opengl renderer a few years ago but now I am updating it for testing shaders / lighting models as I found direct x to be cumbersome for rapid iteration.",]}

                  onClickFunction={() => {
                    // I gave up trying to index everything properly and now each project will just add a number to the end since its on a switch statement where order doesnt impact.
                    setModalProjectIndex(15);
                    ModalToggled();
                  }}

                ></ProjectDescription>
              </div>

              <div id="DirectXRenderer">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/DirectXRenderer"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="DirectX Renderer"
                  technologiesList={["C++", "Imgui", "Graphics"]}
                  projectDescriptions={["To learn more about graphics programming and shaders I have been working on a DirectX Renderer with dear Imgui.",]}

                  onClickFunction={() => {
                    setModalProjectIndex(5);
                    ModalToggled();
                  }}

                ></ProjectDescription>
              </div>

              <h1 className="mt-20 text-2xl">Tech Demos</h1>

              <div id="InfiniteHallway">
                <ProjectDescription
                  linksLinks={["https://github.com/ThomasLambProgramming/LiminalSleep"]}
                  linksText={["Github Source Repo"]}
                  copyrightText=""
                  hideProjectDetails={false}
                  isDarkMode={isDarkMode}
                  projectName="Infinite Hallway"
                  technologiesList={["Unity", "C#"]}
                  projectDescriptions={["As part of our GDML course we made a small horror/thriller project, It used look direction dot products to change the room as the player progressed."]}

                  onClickFunction={() => {
                    setModalProjectIndex(9);
                    ModalToggled();
                  }}

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
                  projectDescriptions={["Small Bezier curve example to learn unity handles + other tooling and how bezier curves work for future projects",]}

                  onClickFunction={() => {
                    setModalProjectIndex(14);
                    ModalToggled();
                  }}

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

                  onClickFunction={() => {
                    setModalProjectIndex(8);
                    ModalToggled();
                  }}

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

                  onClickFunction={() => {
                    setModalProjectIndex(10);
                    ModalToggled();
                  }}

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

                  onClickFunction={() => {
                    setModalProjectIndex(11);
                    ModalToggled();
                  }}

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

                  onClickFunction={() => {
                    setModalProjectIndex(12);
                    ModalToggled();
                  }}

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

                  onClickFunction={() => {
                    setModalProjectIndex(13);
                    ModalToggled();
                  }}

                ></ProjectDescription>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default App;
