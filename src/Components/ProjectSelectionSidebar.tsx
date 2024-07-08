import GithubCommitDisplay from "./GithubCommitDisplay";

interface SiderbarProps {
  isDarkMode: boolean;
  activeProjects: string[];
  professionalProjects: string[];
  previousProjects: string[];
  techDemoProjects: string[];
  aieProjects: string[];
}
const ProjectSelectionSiderbar: React.FC<SiderbarProps> = (properties) =>
  (
    <div className="flex flex-col lg:sticky top-20 lg:w-[20%] lg:max-w-[220px] mt-10 ">
      <div className="flex flex-row lg:flex-col space-x-5 w-full lg:space-x-0 ml-2 ">

        <div className={`flex flex-col `}>
          <h2 className={"mt-4 text-md " + (properties.isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
            Professional Experience
          </h2>
          {properties.professionalProjects.map((projectName, index) => {return ( 
            <a href={"#professionalProject" + index} className="text-sm hover:underline">{projectName}</a>
          )})}
        </div>

        <div className="flex flex-col">
          <h2 className={"mt-4 text-md " + (properties.isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
            Personal Projects
          </h2>
          {properties.activeProjects.map((projectName, index) => {return ( 
            <a href={"#activeProject" + index} className="text-sm hover:underline">{projectName}</a>
          )})}
        </div>

        <div className="flex flex-col">
          <h2 className={"mt-4 text-md " + (properties.isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
            Previous Projects 
          </h2>
          {properties.previousProjects.map((projectName, index) => {return ( 
            <a href={"#previousProject" + index} className="text-sm hover:underline">{projectName}</a>
          )})}
        </div>

        <div className="flex flex-col">
          <h2 className={"mt-4 text-md " + (properties.isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
            Tech Demos 
          </h2>
          {properties.techDemoProjects.map((projectName, index) => {return ( 
            <a href={"#techDemo" + index} className="text-sm hover:underline">{projectName}</a>
          )})}
        </div>

        <div className="flex flex-col">
          <h2 className={"mt-4 text-md " + (properties.isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
           University Projects 
          </h2>
          {properties.aieProjects.map((projectName, index) => {return ( 
            <a href={"#aieProject" + index} className="text-sm hover:underline">{projectName}</a>
          )})}
        </div>

      </div>
      <GithubCommitDisplay isDarkMode={properties.isDarkMode} />
    </div>
  )
export default ProjectSelectionSiderbar;
