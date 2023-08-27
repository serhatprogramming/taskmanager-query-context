const TaskFilter = () => {
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    console.log("filter: " + selectedValue);
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
