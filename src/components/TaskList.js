import Task from "./Task";

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      description: "Finish the report",
      urgent: false,
    },
    {
      id: 2,
      description: "Buy groceries",
      urgent: true,
    },
    {
      id: 3,
      description: "Call John",
      urgent: true,
    },
    {
      id: 4,
      description: "Prepare presentation",
      urgent: false,
    },
  ];

  return (
    <div>
      <h3>Tasks</h3>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
