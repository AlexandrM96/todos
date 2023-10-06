export interface Task {
    task: string,
    status: boolean,
    id: number
}

export interface TodosInterface {
    'tasks': Task[] | [],
    'taskListStatus': string
}