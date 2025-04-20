import { useState } from "react";
import "./Form.css";

import { FormProps } from "../types/types";

const Form: React.FC<FormProps> = ({ addTodo }) => {
    const [inputTodoItem, setInputTodoItem] = useState<string>("");

    const handleInputTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTodoItem(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputTodoItem);

        if (inputTodoItem.trim() === "") {
            return;
        }

        addTodo(inputTodoItem);
        setInputTodoItem("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <h2>Add new todos via the input field:</h2>
            <div className="group-input">
                <input 
                    type="text" 
                    value={inputTodoItem}
                    onChange={handleInputTodoChange}
                />
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default Form;
