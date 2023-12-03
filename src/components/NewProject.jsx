import Input from "./Input";

function NewProject() {
  return (
    <>
      <div>        
        <div>
          <Input label="Title"  />
          <Input label="Description" textarea />
          <Input label="Due Date"  />
        </div>
        <menu>
          <li><button>Cancel</button></li>
          <li><button>Save</button></li>
        </menu>
      </div>
    </>
  )
}

export default NewProject;