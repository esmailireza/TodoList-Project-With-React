import Select from "react-select";

const options = [
  { value: "All", label: "ALL" },
  { value: "completed", label: "completed" },
  { value: "unCompleted", label: "unCompleted" },
];
const NavBar = ({ unCompletedTodos, onChange, selectOption }) => {
  return (
    <header>
      {unCompletedTodos ? (
        <>
          <span>{unCompletedTodos}</span> <h2> are not completed</h2>
        </>
      ) : (
        <h2>set your today todos!</h2>
      )}
      <Select
        onChange={onChange}
        value={selectOption}
        options={options}
        className="select"
      />
    </header>
  );
};

export default NavBar;
