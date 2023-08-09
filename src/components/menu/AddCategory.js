import { useEffect, useRef } from "react";
import { changeCategoryValue, resetForm } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useAddCategoryMutation } from "../../store";

function AddCategory() {
  const [addCategory, results] = useAddCategoryMutation();

  const dispatch = useDispatch();

  const { value } = useSelector((state) => {
    return { value: state.categoryForm.value };
  });

  const changeFormValue = (e) => {
    dispatch(changeCategoryValue(e.target.value));
  };

  const submitCategoryForm = (e) => {
    e.preventDefault();
    addCategory({ value, color: getRandomColor() });
    dispatch(resetForm());
  };

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // same / add task

  const clickRef = useRef(null);
  useEffect(() => {
    const handler = (event) => {
      if (!clickRef.current) return;
      if (!clickRef.current.contains(event.target)) {
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div ref={clickRef}>
      <form ref={clickRef} onSubmit={submitCategoryForm}>
        <input
          className="styledInput category"
          value={value}
          onChange={changeFormValue}
          placeholder="+ Add Category"
        ></input>
      </form>
    </div>
  );
}

export default AddCategory;
