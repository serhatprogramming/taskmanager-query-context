import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateTask } from "../services/api";

const Task = ({ task }) => {
  const queryClient = useQueryClient();

  const updateTaskMutation = useMutation(
    (updatedTask) => updateTask(task.id, updatedTask),
    {
      onSuccess: () => queryClient.invalidateQueries("tasks"),
    }
  );

  const handleToggleUrgent = () => {
    updateTaskMutation.mutate({ ...task, urgent: !task.urgent });
  };

  return (
    <div>
      <span>{task.description}. </span>
      <span>
        <em>{task.urgent ? "(Urgent) " : ""}</em>
      </span>
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={handleToggleUrgent}
      >
        {task.urgent ? "Make Non-Urgent" : "Make Urgent"}
      </span>
    </div>
  );
};

export default Task;
