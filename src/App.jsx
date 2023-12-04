import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    <>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main>
          <ProjectsSidebar />
          {/* <NewProject /> */}
          <NoProjectSelected />
        </main>
      </LocalizationProvider>
    </>
  );
}

export default App;
