export enum ProjectType 
{
  ActiveProject,
  ProfessionalProject,
  PreviousProject,
  TechDemo,
  AieProject, 
}

interface ProjectDescriptionInformation
{
    projectType: number,
    projectName: string,
    hasProjectModal: boolean,
    copyRightText: string,
    projectDescriptions: string[],
    technologyList: string[],
    urlLinkTitles: string[],
    urlLinks: string[],
}

export const projects: ProjectDescriptionInformation[] = [
  {
    projectType: ProjectType.ProfessionalProject,
    projectName: "Vlad Circus",
    hasProjectModal: false,
    copyRightText: "Copyright © 2022 Indiesruption. All Rights Reserved.",
    technologyList: ["Console", "Monogame", "C++", "C#"],
    projectDescriptions: ["In Vlad Circus: Descend into Madness, discover a story full of mystery and pain where every shadow hides a twisted secret or vicious threat, and no one is safe from tragedy."],
    urlLinkTitles: ["Steam", "Epic Games", "Switch", "Xbox", "Playstation"],
    urlLinks:
    [
      "https://store.steampowered.com/app/1702430/Vlad_Circus_Descend_Into_Madness/",
      "https://store.epicgames.com/en-US/p/vlad-circus-descend-into-madness-9d1ed2",
      "https://ec.nintendo.com/AU/en/titles/70010000045531",
      "https://www.xbox.com/en-US/games/store/vlad-circus-descend-into-madness/9ns2rvcmxh60",
      "https://store.playstation.com/en-us/product/UP5552-CUSA30287_00-9071855390281250"
    ],
  },

  {
    projectType: ProjectType.ProfessionalProject,
    projectName: "Aradena",
    hasProjectModal: false,
    copyRightText: "Copyright © 2024 Aradena. All Rights Reserved.",
    technologyList: ["Unity", "C#"],
    projectDescriptions: ["Aradena is a free-to-play, Tactical TCG where collectable cards come to life in strategic, 3D gameplay. As a warrior, you'll join a faction and battle other players in the medieval fantasy kingdom."],
    urlLinkTitles: ["Aradena.io"],
    urlLinks:
    ["https://aradena.io/home/"],
  },

  {
    projectType: ProjectType.ProfessionalProject,
    projectName: "Homebase",
    hasProjectModal: false,
    copyRightText: "TM ® & © 2024 Scholastic Inc. All Rights Reserved.",
    technologyList: ["Unity", "C#"],
    projectDescriptions: ["Scholastic Home Base is a safe, free, 3D interactive world that celebrates favorite stories through book-based games, live author events, and a large community of readers."],
    urlLinkTitles: ["Homebase Website", "Google Play Store", "Apple App Store",],
    urlLinks:
    [        
      "https://kids.scholastic.com/kid/homebase/",
      "https://play.google.com/store/apps/details?id=com.scholastic.HomeBase&hl=en&gl=US&pli=1",
      "https://apps.apple.com/us/app/home-base-by-scholastic/id1450869907",
    ],
  },

  {
    projectType: ProjectType.ProfessionalProject,
    projectName: "Motogp Ignition",
    hasProjectModal: false,
    copyRightText: "An official product of the MotoGP™ logo and related marks are trade marks. All rights reserved. Copyright © 2023 ANIMOCA BRANDS LIMITED, ALL RIGHTS RESERVED. MotoGP™ Ignition © 2023 DORNA",
    technologyList: ["Unity", "C#"],
    projectDescriptions: ["MotoGP Ignition is a play-to-earn blockchain-based racing management and collectibles game that utilizes the Flow network with its NFT assets and cryptocurrency, REVV."],
    urlLinkTitles: ["https://motogp-ignition.com/"],
    urlLinks:
    ["Motogp-Ignition.com"],
  },

    {
    projectType: ProjectType.PreviousProject,
    projectName: "Opengl Renderer",
    hasProjectModal: true,
    copyRightText: "",
    technologyList: ["C++", "Imgui", "Graphics", "OpenGL"],
    projectDescriptions: ["I am currently reworking a previous opengl rendering project to test out shader effects and learn more about graphics programming.",],
    urlLinkTitles: ["Github Source Repo"],
    urlLinks:
    ["https://github.com/ThomasLambProgramming/GraphicsAIE"],
  },

  {
    projectType: ProjectType.PreviousProject,
    projectName: "DirectX Renderer",
    hasProjectModal: true,
    copyRightText: "",
    technologyList: ["C++", "Imgui", "Graphics", "Dx11"],
    projectDescriptions: ["To learn more about graphics programming and shaders I have been working on a DirectX Renderer with dear Imgui.",],
    urlLinkTitles: ["Github Source Repo"],
    urlLinks:
    ["https://github.com/ThomasLambProgramming/DirectXRenderer"],
  },

  {
    projectType: ProjectType.TechDemo,
    projectName: "Vehicle Suspension",
    hasProjectModal: true,
    copyRightText: "",
    technologyList: ["Unreal", "C++"],
    projectDescriptions: ["Tech demo for simulating car suspension using 4 fake physics springs on one rigidbody",],
    urlLinkTitles: ["Github Source Repo"],
    urlLinks:
    ["https://github.com/ThomasLambProgramming/ManiacCab"],
  },

  {
    projectType: ProjectType.TechDemo,
    projectName: "Infinite Hallway",
    hasProjectModal: true,
    copyRightText: "",
    technologyList: ["Unity", "C#"],
    projectDescriptions: ["As part of our GDML course we made a small horror/thriller project, It used look direction dot products to change the room as the player progressed."],
    urlLinkTitles: ["Github Source Repo"],
    urlLinks:
    ["https://github.com/ThomasLambProgramming/LiminalSleep"],
  },

  {
    projectType: ProjectType.TechDemo,
    projectName: "Bezier Curves",
    hasProjectModal: false,
    copyRightText: "",
    technologyList: ["Unity", "C#"],
    projectDescriptions: ["Small Bezier curve example to learn unity handles + other tooling and how bezier curves work for future projects",],
    urlLinkTitles: ["Github Source Repo"],
    urlLinks:
    ["https://github.com/ThomasLambProgramming/UnityGraphics"],
  },

  {
    projectType: ProjectType.TechDemo,
    projectName: "Node Graph Generator",
    hasProjectModal: false,
    copyRightText: "",
    technologyList: ["Unity", "C#"],
    projectDescriptions: ["Node graph generator that takes in a environment and creates a navigation mesh based off all meshes contained in the environment.",],
    urlLinkTitles: ["Github Source Repo"],
    urlLinks:
    ["https://github.com/ThomasLambProgramming/NodeGraph"],
  },

  {
    projectType: ProjectType.AieProject,
    projectName: "Malicious",
    hasProjectModal: false,
    copyRightText: "",
    technologyList: ["Unity", "C#"],
    projectDescriptions: ["For my 2nd year major project at AIE I worked with a team of 6 other people to produce this robot puzzle platformer.",],
    urlLinkTitles: ["Github Source Repo"],
    urlLinks:
    ["https://github.com/ThomasLambProgramming/MaliciousVisionQuest"],
  },

  {
    projectType: ProjectType.AieProject,
    projectName: "Rapid Delivery",
    hasProjectModal: false,
    copyRightText: "",
    technologyList: ["Unity", "C#"],
    projectDescriptions: ["For my first major project at AIE we created an endless runner where the player must avoid obstacles and fire tea from a cannon to customers."],
    urlLinkTitles: ["Github Source Repo"],
    urlLinks:
    ["https://github.com/ThomasLambProgramming/RapidDelivery"],
  },

  {
    projectType: ProjectType.AieProject,
    projectName: "Carnival Carnage",
    hasProjectModal: false,
    copyRightText: "",
    technologyList: ["Unity", "C#", "VR"],
    projectDescriptions: ["I worked with a team of 9 in a small time frame to create this VR arcade game where you smash clown heads with a hammer that can be thrown and recalled like thors hammer."],
    urlLinkTitles: ["Github Source Repo"],
    urlLinks:
    ["https://github.com/ThomasLambProgramming/Carnival-Carnage"],
  },

  {
    projectType: ProjectType.AieProject,
    projectName: "Isolator",
    hasProjectModal: false,
    copyRightText: "",
    technologyList: ["Unity", "C#"],
    projectDescriptions: ["This was a small 12 hour game jam that I created with a team that involved some particle effects and interesting design.",],
    urlLinkTitles: ["Github Source Repo"],
    urlLinks:
    ["https://github.com/ThomasLambProgramming/Isolator"],
  },
]
