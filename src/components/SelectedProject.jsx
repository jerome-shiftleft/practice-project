function SelectedProject({project}) {

  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <>
      <header>
        <div>
          <h1>{project.title}</h1>
          <button>Delete</button>
        </div>
        <p>{formattedDate}</p>
        <p>{project.description}</p>
      </header>
    </>
  );
} // end of function SelectedProject()

export default SelectedProject;