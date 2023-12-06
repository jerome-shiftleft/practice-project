import Button from "@mui/material/Button";

function ProjectsSidebar({ onStartAddProject, projects }) {
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
          {projects.map((project) => (
            <li key={project.id}>
              <Button variant="contained" size="small">{project.title}</Button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default ProjectsSidebar;
