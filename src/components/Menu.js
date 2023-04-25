import AddCategory from "./AddCategory";
function Menu({ showCategory, createCategory, categoryList }) {
  return (
    <div>
      <button onClick={() => showCategory("")}>Show All</button>
      {categoryList.map((category) => (
        <button key={category.id} onClick={() => showCategory(category.value)}>
          {category.value}
        </button>
      ))}
      <AddCategory createCategory={createCategory} />
    </div>
  );
}

export default Menu;
