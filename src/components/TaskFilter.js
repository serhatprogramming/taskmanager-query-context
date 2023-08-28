import { useContext } from "react";
import FilterContext from "../contexts/FilterContext";

const TaskFilter = () => {
  const { dispatch } = useContext(FilterContext);

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    dispatch({ type: "SET_FILTER", filter: selectedValue });
  };

  return (
    <div>
      <span>
        <strong>Filter Tasks </strong>
      </span>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="urgent">Urgent</option>
        <option value="non-urgent">Non-Urgent</option>
      </select>
    </div>
  );
};

export default TaskFilter;
