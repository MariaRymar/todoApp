import { useState, useEffect, useRef } from "react";

function AddCategory({ createCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  // same / add task

  const clickRef = useRef(null);
  useEffect(() => {
    const handler = (event) => {
      if (!clickRef.current) return;
      if (!clickRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);


  return (
    <div ref={clickRef}>
      <div onClick={() => setIsOpen(!isOpen)}>+ Create New Category</div>
      {isOpen ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createCategory(newCategory);
            setNewCategory("");
            setIsOpen(false)
          }}
        >
          <input
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Category Name"
          ></input>
        </form>
      ) : null}
    </div>
  );
}

export default AddCategory;
