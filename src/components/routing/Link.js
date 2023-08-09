import UseTaskContext from "../../hooks/use-task-context";

function Link({ to, children }) {
  const { navigate } = UseTaskContext();

  const handleClick = (e) => {
    e.preventDefault();

    navigate(to);
  };
  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
