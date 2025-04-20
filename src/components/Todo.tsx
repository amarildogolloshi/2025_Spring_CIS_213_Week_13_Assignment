import { useState } from "react";
import List from "./List";
import Form from "./Form";
import Header from "./Header";
import "./Todo.css";

import { TodoItem } from "../types/types";

// interface Todo {
//     id: number;
//     text: string;
//     isCompleted: boolean;
// }

const Todo: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>([
        { id: 1, text: "sleep", isCompleted: false },
        { id: 2, text: "study", isCompleted: true },
        { id: 3, text: "eat dinner", isCompleted: false },
        { id: 4, text: "go to gym", isCompleted: false },
        { id: 5, text: "shopping", isCompleted: false },
    ]);

    const addTodo = (text: string): void => {
        const todoItem: TodoItem = {
            id: todos.length + 1,
            text: text,
            isCompleted: false,
        };
        setTodos([...todos, todoItem]);
    };

    const removeTodo = (id: number): void => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleComplete = (id: number): void => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTodos(updatedTodos);
    };

    const updateTodo = (id: number, text: string): void => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, text: text } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div className="todo">
            <Header />
            <Form addTodo={addTodo} />
            <List todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} updateTodo={updateTodo} />
        </div>
    );
};

export default Todo;
