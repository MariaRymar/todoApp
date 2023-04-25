import AddCategory from "./AddCategory";
function Menu({ showCategory, createCategory, categoryList }) {
  return (
    <div>
      <button onClick={() => showCategory("")}>Show All</button>
      <button onClick={() => showCategory("Home")}>Home</button>
      <button onClick={() => showCategory("Work")}>Work</button>
      <AddCategory createCategory={createCategory} />
    </div>
  );
}

export default Menu;
