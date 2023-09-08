import {useTypedSelector} from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useActions";
import {Task} from "../../interfaces/todos.slice.interface";
import './Buttons.css';

export default function Buttons() {

    const {todos} = useTypedSelector(state => state);

    const {taskListStatus, taskListClear} = useActions();

    const clickBtnAll = () => {
        const status: string = 'All';
        return taskListStatus('All');

    }

    const clickBtnActive = () => {
        const status: string = 'Active';
        return taskListStatus(status);

    }

    const clickBtnCompleted = () => {
        const status: string = 'Completed';
        return taskListStatus(status);

    }

    const clickBtnClear = () => {
        return taskListClear();
    }

    const taskLength = () => {
        const length = todos.tasks && todos.tasks.filter((item: Task) =>
            item.status === true
        )
        return length.length
    }

    return (
        <div className='buttons'>
            <div className='buttons__container'>
                <div className='buttons__container-task-length'>
                    {`${taskLength()} items left`}
                </div>
                <div className='buttons__container-buttons'>
                    <button
                        onClick={clickBtnAll}
                        className={
                            todos.taskListStatus === 'All' ?
                                'buttons__container-buttons-button-active'
                                :
                                'buttons__container-buttons-button'
                        }>
                        All
                    </button>
                    <button
                        onClick={clickBtnActive}
                        className={
                            todos.taskListStatus === 'Active' ?
                                'buttons__container-buttons-button-active'
                                :
                                'buttons__container-buttons-button'
                        }>
                        Active
                    </button>
                    <button
                        onClick={clickBtnCompleted}
                        className={
                            todos.taskListStatus === 'Completed' ?
                                'buttons__container-buttons-button-active'
                                :
                                'buttons__container-buttons-button'
                        }>
                        Completed
                    </button>
                </div>
                <div className='buttons__container-clear'>
                    <button onClick={clickBtnClear} className='buttons__container-clear-button'>Clear Completed</button>
                </div>
            </div>
        </div>
    );
}

