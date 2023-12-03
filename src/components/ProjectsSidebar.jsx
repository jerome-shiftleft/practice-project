import Button from '@mui/material/Button';

function ProjectsSidebar() {
  return (
    <>
      <aside id='sidebar' className="sidebar">
        <h2 className="">
          Your Projects
        </h2>
        <div>
          <Button variant="contained" size="small">+ Add Button</Button>
        </div>
      </aside>
    </>
  );
}

export default ProjectsSidebar;
