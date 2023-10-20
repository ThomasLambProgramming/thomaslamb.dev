
function ProjectPreview(string: string)
{
    return (
      <div>
        <article className="style2">
          <span className="image">
            <img src="ProjectAssets/Complex/NodeGraphExample.gif" alt="" />
          </span>
          <a href="">
            <h2>{string}</h2>
            <div className="content">
              <p>
                I created a node generation system to take in an environment
                mesh and produce a node graph for Ai agents.
              </p>
            </div>
          </a>
        </article>
      </div>
    );
    
}

export default ProjectPreview;