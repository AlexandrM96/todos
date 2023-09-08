import useActions from "../../hooks/useActions";
import {Task} from "../../interfaces/todos.slice.interface";
import './ToDoItem.css';

export default function ToDoItem(props:Task) {

    const {statusChange} = useActions();

    const clickBtn = () => {
        return statusChange(props.task);
    }

    return (
        <div className="to-do-item">
            <div className="to-do-item__container">
                <button
                    onClick={clickBtn}
                    className={props.status === true ?
                        "to-do-item__container-button"
                        :
                        "to-do-item__container-button-false"}>
                </button>
                <div className={props.status === true ?
                    "to-do-item__container-task"
                    :
                    "to-do-item__container-task-false"}>
                    {props.task}
                </div>
            </div>
        </div>
    );
}

