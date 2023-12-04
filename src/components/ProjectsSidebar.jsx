import Button from '@mui/material/Button';

function ProjectsSidebar({onStartAddProject}) {
  return (
    <>
      <aside id='sidebar' className="sidebar">
        <h2 className="">
          Your Projects
        </h2>
        <div>
          <Button onClick={onStartAddProject} variant="contained" size="small">+ Add Button</Button>
        </div>
      </aside>
    </>
  );
}

export default ProjectsSidebar;
