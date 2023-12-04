import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import noProjectImage from "../assets/no-projects.png";

function NoProjectSelected() {
  return (
    <>
      <Box sx={{
        '& .no-project-icon': {
          display: 'block',
          width: '120px'
        }
      }} id="no-project" className="content">
        <img className="no-project-icon" src={noProjectImage} alt="An empty task list" />
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <p>
          <Button variant="contained">Create a new project</Button>
        </p>
      </Box>
    </>
  );
}

export default NoProjectSelected;
