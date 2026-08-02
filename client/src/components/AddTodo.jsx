import axios from "axios";
import { useState } from "react";
import "./AddTodo.css";

function AddTodo({ fetchTodos }) {
    const [title, setTitle] = useState("");

    const handleAddTodo = async () => {
        if (!title.trim()) {
            alert("Please enter a todo");
            return;
        }

        try {
            await axios.post("http://localhost:3200/api/todos", {
                title,
            });

            setTitle("");

            // Refresh todo list
            fetchTodos();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="add-todo">
            <input
                type="text"
                placeholder="Enter Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={handleAddTodo}>
                Add
            </button>
        </div>
    );
}

export default AddTodo;