import { useState, useEffect, useRef } from "react";
import { changeCategoryValue, addCategory } from "../../store";
import { useDispatch, useSelector } from "react-redux";

function AddCategory() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  // const [newCategory, setNewCategory] = useState("");
  const {value} = useSelector((state) => {
    return{ value: state.categoryForm.value};
  });
  console.log(value)

  const changeFormValue = (e) => {
    dispatch(changeCategoryValue(e.target.value))
  }

  const submitCategoryForm = (e) => {
    e.preventDefault();
    dispatch(addCategory({value}))
    setIsOpen(false);

  }

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
      {isOpen ? (
        <form
          className="styledInput category"
          onSubmit={submitCategoryForm}
        >
          <input
            value={value}
            onChange={changeFormValue}
            placeholder="Category Name"
          ></input>
        </form>
      ) : (
        <div
          className="styledInput category"
          onClick={() => setIsOpen(!isOpen)}
        >
          + Create New Category
        </div>
      )}
    </div>
  );
}

export default AddCategory;
