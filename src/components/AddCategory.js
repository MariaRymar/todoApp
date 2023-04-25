import { useState } from "react";

function AddCategory({ createCategory}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newCategory, setNewCategory] = useState('')
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>+ Create New Category</div>
      {isOpen ? <form onSubmit={(e) => {e.preventDefault(); createCategory(newCategory); setNewCategory('')}}>
          <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder='Category Name'></input>
      </form> : <div>closed</div>}
    </div>
  );
}

export default AddCategory;
