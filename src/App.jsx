import CssBaseline from "@mui/material/CssBaseline";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

function App() {
  return (
    <>
      <CssBaseline />
      <main>
        <ProjectsSidebar />
        <NewProject />
      </main>
    </>
  );
}

export default App;
