export interface Task {
    task: string,
    status: boolean
}

export interface TodosInterface {
    'tasks': Task[] | [],
    'taskListStatus': string
}