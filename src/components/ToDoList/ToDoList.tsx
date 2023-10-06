import React, {useState} from 'react'
import ToDoItem from '../ToDoItem/ToDoItem';
import useActions from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Task} from "../../interfaces/todos.slice.interface";
import './ToDoList.css';

interface TodosInterface {
    'task': string
}

export default function ToDoList() {

    const [state, setState] = useState((): TodosInterface => {
        return {
            task: ""
        }
    });

    const {todos} = useTypedSelector(state => state);

    const {addTask} = useActions();

    let status: boolean | string = 'All';

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setState(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    };

    const clickAdd = () => {
        addTask(state.task);
        setState(prev => {
            return {
                ...prev,
                task: '',
            }
        })
    };

    const onKeyDown = ({keyCode}: React.KeyboardEvent<HTMLInputElement>) => {
        if (keyCode === 13) {
            addTask(state.task);
            return setState(prev => {
                return {
                    ...prev,
                    task: '',
                }
            })
        }
    };

    if (todos.taskListStatus === 'All') {
        status = 'All';
    }
    if (todos.taskListStatus === 'Active') {
        status = true;
    }
    if (todos.taskListStatus === 'Completed') {
        status = false;
    }

    return (
        <div className="to-do-list">
            <div className="to-do-list__container">
                < input
                    className="to-do-list__container-input"
                    type="task"
                    id="task"
                    name="task"
                    value={state.task}
                    onChange={changeInput}
                    onKeyDown={onKeyDown}
                    placeholder="Какие планы на сегодня?"
                />
                <button
                    onClick={clickAdd}
                    className="to-do-list__container-button"
                >+
                </button>
            </div>
            <div className='to-do-list__container-task'>
                {todos.tasks && todos.tasks.filter((item: Task) =>
                    (status === "All" ?
                        true
                        :
                        item.status === status)
                ).map((item: Task, index) => (
                    <ToDoItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}
