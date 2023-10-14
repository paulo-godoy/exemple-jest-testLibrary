import { useState } from "react";
import axios from "axios";
import Button from "../button/Button";

interface Task {
  id: string;
  title: string;
}
const Task = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleClick = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTasks(data);
      setErrorMessage(null);
    } catch (error: any) {
      setErrorMessage(error?.message);
    }
  };
  return (
    <>
      <h1>Task from API</h1>
      <Button disabled={false} onClick={handleClick}>
        Get Task from API
      </Button>

      {tasks?.length > 0 &&
        tasks.map((task) => <p key={task.id}>{task.title}</p>)}

      {errorMessage}
    </>
  );
};

export { Task };
