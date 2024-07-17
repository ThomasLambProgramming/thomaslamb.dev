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

      <ProjectSidebarSection
        sectionTitle="Professional Projects"
        isDarkMode={properties.isDarkMode}
        projectNames={properties.professionalProjects}
        firstLinkRef="#top"
      />
      <ProjectSidebarSection
        sectionTitle="Active Projects"
        isDarkMode={properties.isDarkMode}
        projectNames={properties.activeProjects}
        firstLinkRef={"#" + properties.professionalProjects[properties.professionalProjects.length - 1]}
      />
      <ProjectSidebarSection
        sectionTitle="Previous Projects"
        isDarkMode={properties.isDarkMode}
        projectNames={properties.previousProjects}
        firstLinkRef={"#" + properties.activeProjects[properties.activeProjects.length - 1]}
      />
      <ProjectSidebarSection
        sectionTitle="Tech Demos"
        isDarkMode={properties.isDarkMode}
        projectNames={properties.techDemoProjects}
        firstLinkRef={"#" + properties.previousProjects[properties.previousProjects.length - 1]}
      />
      <ProjectSidebarSection
        sectionTitle="University Projects"
        isDarkMode={properties.isDarkMode}
        projectNames={properties.aieProjects}
        firstLinkRef={"#" + properties.techDemoProjects[properties.techDemoProjects.length - 1]}
      />
    </div>
    <GithubCommitDisplay isDarkMode={properties.isDarkMode} />
  </div>
)

interface SidebarSectionProps {
  isDarkMode: boolean;
  firstLinkRef: string;
  sectionTitle: string;
  projectNames: string[];
}
const ProjectSidebarSection: React.FC<SidebarSectionProps> = (props) =>
(
  <div className={`flex flex-col `}>
    <h2 className={"mt-4 text-md " + (props.isDarkMode ? "text-DarkNeutral-300" : "text-DarkNeutral-400 font-bold")}>
      {props.sectionTitle}
    </h2>
    {props.projectNames.map((projectName, index) => {
      if (index > 0) {
        return (
          <a key={projectName + index + "ProjectSelectionSiderbar"} href={"#" + props.projectNames[index - 1]} className="text-sm hover:underline">{projectName}</a>
        )
      }
      else
        return <a key={projectName + index + "ProjectSelectionSiderbar"} href={props.firstLinkRef} className="text-sm hover:underline">{projectName}</a>
    })}
  </div>
)
export default ProjectSelectionSiderbar;
