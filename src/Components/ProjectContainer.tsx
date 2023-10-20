// This is a container for projects so it will be separated into Engine, Unreal, Unity/Uni, and Professional titles.
import React from 'react';
import ProjectPreview from './ProjectPreview';

const ProjectContainer: React.FC<{projects: string[], typeTitle: string}> = ({projects, typeTitle}) =>
{
    return (
      <div className="mb-14 ml-24">

<section className="tiles">


<article className="style1">
  <span className="image">
    <img src="ProjectAssets/Malicious/MaliciousSmall.gif" alt="" />
  </span>
  <a href="Malicious.html">
    <h2>Malicious</h2>
    <div className="content">
      <p>For my major project at AIE I worked with a team of 6 other people to produce 
        this puzzle platformer.
      </p>
    </div>
  </a>
</article>

<ProjectPreview projectName="" />


</section>

        <h2>
          {typeTitle}
        </h2>
        {projects.map((project: string) => (
          <li>{project}</li>
        ))}
        <image></image>
      </div>
    );
}
export default ProjectContainer;