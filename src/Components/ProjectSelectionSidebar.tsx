import GithubCommitDisplay from "./GithubCommitDisplay";

interface SiderbarProps {
  isDarkMode: boolean;
}
const ProjectSelectionSiderbar: React.FC<SiderbarProps> = (properties) =>
  (
    <div className="flex flex-col sticky top-20 lg:w-[20%] lg:max-w-[220px] mt-10 ">
      <div className="flex flex-row lg:flex-col space-x-5 w-full lg:space-x-0 ml-2 ">
        <div className={`flex flex-col `}>
          <h2 className={"mt-4 text-md " + (properties.isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
            Professional Experience
          </h2>
          <a href="#TopOfPage" className="text-sm hover:underline">Vlad Circus</a>
          <a href="#Vlad" className="text-sm hover:underline">Aradena</a>
          <a href="#Aradena" className="text-sm hover:underline">Homebase</a>
          <a href="#Homebase" className="text-sm hover:underline">Motogp: Ignition</a>
        </div>

        <div className="flex flex-col">
          <h2 className={"mt-4 text-md " + (properties.isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
            Personal Projects
          </h2>
          <a href="#FishingWizard" className="text-sm hover:underline">Maniac Cab</a>
          <a href="#Maniac" className="text-sm hover:underline">Opengl Renderer</a>
          <a href="#OpenglRenderer" className="text-sm hover:underline">DirectX Renderer</a>
        </div>

        <div className="flex flex-col">
          <h2 className={"mt-4 text-md " + (properties.isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
            Tech Demos
          </h2>
          <a href="#DirectXRenderer" className="text-sm hover:underline">Infinite Hallway</a>
          <a href="#InfiniteHallway" className="text-sm hover:underline">Bezier Curves</a>
        </div>

        <div className="flex flex-col">
          <h2 className={"mt-4 text-md " + (properties.isDarkMode ? "text-Neutral-600" : "text-DarkNeutral-400 font-bold")}>
            University Projects
          </h2>
          <a href="#BezierCurves" className="text-sm hover:underline">Node Graph Generator</a>
          <a href="#Node" className="text-sm hover:underline">Malicious</a>
          <a href="#Malicious" className="text-sm hover:underline">Rapid Delivery</a>
          <a href="#RapidDelivery" className="text-sm hover:underline">Carnival Carnage</a>
          <a href="#Isolator" className="text-sm hover:underline">Isolator</a>
        </div>

      </div>
      <GithubCommitDisplay isDarkMode={properties.isDarkMode} />
    </div>
  )
export default ProjectSelectionSiderbar;
