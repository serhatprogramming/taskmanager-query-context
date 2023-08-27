const TaskForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskDescription = event.target.taskDescription.value;
    if (taskDescription) {
      console.log("task: " + taskDescription);
      event.target.taskDescription.value = "";
    }
  };

  return (
    <div>
      <h3>Create New Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task description"
          name="taskDescription"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
