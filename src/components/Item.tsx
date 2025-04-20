import { useState } from "react";
import "./Item.css";

import { ItemProps } from "../types/types";

const Item: React.FC<ItemProps> = ({ todo, removeTodo, toggleComplete, updateTodo }) => {
    const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);
    const [text, setText] = useState<string>(todo.text);
    const [inEditMode, setInEditMode] = useState<boolean>(false);

    const handleCompletion = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsCompleted(event.target.checked);
        toggleComplete(todo.id);
    };

    const handleDelete = () => {
        removeTodo(todo.id);
        console.log("Delete");
    };

    const handleEdit = () => {
        setInEditMode(true);
        console.log("Edit");
    };

    const handleUpdate = () => {
        console.log("Update");
        updateTodo(todo.id, text);
        setInEditMode(false);
    };

    const handleCancel = () => {
        console.log("Cancel");
        setInEditMode(false);
    };

    return (
        <>
            {inEditMode ? (
                <div className="todo-item">
                    <input type="checkbox" checked={isCompleted} onChange={handleCompletion} />
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            ) : (
                <div className="todo-item">
                    <input type="checkbox" checked={isCompleted} onChange={handleCompletion} />
                    <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
                        {text}
                    </span>
                    <button onClick={handleDelete}>X</button>
                    <button onClick={handleEdit} disabled={isCompleted}>
                        Edit
                    </button>
                </div>
            )}
        </>
    );
};

export default Item;
