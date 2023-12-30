import Button from "@mui/material/Button";

function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <h2 className="">Your Projects</h2>
        <div>
          <Button onClick={onStartAddProject} variant="contained" size="small">
            + Add Button
          </Button>
        </div>
        <ul id="project-list">
          {projects.map((project) => {
            
            let cssClasses = '';            

            cssClasses = project.id == selectedProjectId ? 'active' : '';

            return (
              <li key={project.id}>
                <Button className={cssClasses} size="small" onClick={() => onSelectProject(project.id)}>
                  {project.title}
                </Button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default ProjectsSidebar;
