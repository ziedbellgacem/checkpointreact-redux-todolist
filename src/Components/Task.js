import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Done, Delete } from "../Redux/action/Add";
import EditCom from "./Modal";

function Task({ task }) {
  const dispatch = useDispatch();

  const handelDone = () => {
    dispatch(Done(task.id));
  };

  const handelDelete = () => {
    dispatch(Delete(task.id));
  };
  return (
    <div className="task">
      <h3 style={{ textDecoration: task.done ? "line-through" : "none" }}>
        {task.description}
      </h3>
      <EditCom task={task} />
      <Button variant="success" onClick={handelDelete}>
        Delete
      </Button>
      <Button variant="success" onClick={handelDone}>
        {task.done ? "inDone" : "Done"}
      </Button>
    </div>
  );
}
export default Task;
