import Task from "./Task";
import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../services/api";

const TaskList = () => {
  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["tasks"], queryFn: fetchTasks });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching tasks</p>;
  }

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
