import React from "react";
import Item from "./Item";
import "./List.css";

import { ListProps } from "../types/types";

const List: React.FC<ListProps> = ({ todos, removeTodo, toggleComplete, updateTodo }) => {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <Item
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

export default List;
