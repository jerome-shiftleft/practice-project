import Button from "@mui/material/Button";
import noProjectImage from "../assets/no-projects.png";

function NoProjectSelected({onStartAddProject}) {
  return (
    <>
      <div id="no-project" className="content">
        <img className="no-project-icon" src={noProjectImage} alt="An empty task list" />
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <p>
          <Button onClick={onStartAddProject} variant="contained">Create a new project</Button>
        </p>
      </div>
    </>
  );
}

export default NoProjectSelected;
