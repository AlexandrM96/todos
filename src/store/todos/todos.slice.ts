import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Task, TodosInterface} from '../../interfaces/todos.slice.interface';

const initialState: TodosInterface = {
    tasks: [],
    taskListStatus: 'All',
};

export const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state: TodosInterface, action: PayloadAction<string>) => {
            const task: string = action.payload;
            if (task === '') return {...state, ...state.tasks};
            const obj: Task = {
                task: task,
                status: true,
                id: state.tasks.length + 1
            };
            state.tasks = [...state.tasks, obj];
        },
        statusChange: (state: TodosInterface, action: PayloadAction<number>) => {
            const taskStatusChange: number = action.payload;
            const status: boolean = false;
            const newTasksTwo: Task[] | [] = [...state.tasks];
            newTasksTwo.forEach((item: Task) => {
                if (item.id === taskStatusChange) {
                    console.log(taskStatusChange)
                    item.status = status;
                }
            });
            state.tasks = newTasksTwo;
        },
        taskListStatus: (state: TodosInterface, action: PayloadAction<string>) => {
            state.taskListStatus = action.payload;
        },
        // taskListClear: (state: TodosInterface) => {
        //   state.tasks = [...state.tasks].filter((item: Task) => item.status);
        // },
        taskListClear: (state: TodosInterface) => {
            state.tasks = state.tasks.filter((item: Task) => item.status); // Фильтруем только невыполненные задачи
        },
    },
});

export const todosReducer = todos.reducer;
export const todosActions = todos.actions;
