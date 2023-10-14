import {configureStore} from '@reduxjs/toolkit';
import {todosReducer, todosActions} from './todos.slice';
import {TodosInterface} from '../../interfaces/todos.slice.interface';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

describe('Todos', () => {
    it('добавить задачу', () => {
        const task = 'New Task';

        store.dispatch(todosActions.addTask(task));

        const newState = store.getState().todos;
        expect(newState.tasks).toContainEqual({
            task,
            id: 1,
            status: true,
        });
    });

    it('изменить статус задачи', () => {
        const task = 'Task to change';
        const taskId = 1;
        store.dispatch(todosActions.addTask(task));

        store.dispatch(todosActions.statusChange(taskId));

        const newState = store.getState().todos;
        const changedTask = newState.tasks.find((t) => t.id === taskId);
        expect(changedTask?.status).toBe(false);
    });

    it('удалить готовые задачи', () => {
        const initialState: TodosInterface = {
            tasks: [
                {task: 'Task 1', status: true, id: 1},
                {task: 'Task 2', status: false, id: 2},
            ],
            taskListStatus: 'All',
        };

        const storeWithInitialState = configureStore({
            reducer: {
                todos: todosReducer,
            },
            preloadedState: {todos: initialState},
        });

        storeWithInitialState.dispatch(todosActions.taskListClear());

        const newState = storeWithInitialState.getState().todos;
        expect(newState.tasks).toHaveLength(1);
    });
});
