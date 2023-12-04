import {useState} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {

  const [projectState, setProjectState] = useState({    
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    // setProjectState(prevState => {
    //   return {
    //     ...prevState,
    //     selectedProjectId: null
    //   }
    // });
    console.log('adding project!');
  }

  return (
    <>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main>
          <ProjectsSidebar onStartAddProject={handleStartAddProject} />
          {/* <NewProject /> */}
          <NoProjectSelected onStartAddProject={handleStartAddProject} />
        </main>
      </LocalizationProvider>
    </>
  );
}

export default App;
