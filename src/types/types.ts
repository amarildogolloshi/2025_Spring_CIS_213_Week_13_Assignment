// src/types.ts
export interface TodoItem {
    id: number;
    text: string;
    isCompleted: boolean;
}

// General function types for reusability
export type RemoveTodo = (id: number) => void;
export type ToggleComplete = (id: number) => void;
export type UpdateTodo = (id: number, text: string) => void;
export type AddTodo = (text: string) => void;

// Component-specific props
export interface FormProps {
    addTodo: AddTodo;
}

export interface ListProps {
    todos: TodoItem[];
    removeTodo: RemoveTodo;
    toggleComplete: ToggleComplete;
    updateTodo: UpdateTodo;
}

export interface ItemProps {
    todo: TodoItem;
    removeTodo: RemoveTodo;
    toggleComplete: ToggleComplete;
    updateTodo: UpdateTodo;
}
