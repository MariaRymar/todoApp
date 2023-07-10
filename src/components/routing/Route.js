import UseTaskContext from "../../hooks/use-task-context";

function Route({ path, children }) {
  const { currentPath } = UseTaskContext();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
