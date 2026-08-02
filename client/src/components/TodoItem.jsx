import { useState } from "react";
import "./TodoItem.css";

function TodoItem({
    todo,
    deleteTodo,
    toggleComplete,
    updateTodo,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleSave = () => {
        if (!editTitle.trim()) return;

        updateTodo(
            todo._id,
            editTitle,
            todo.completed
        );

        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditTitle(todo.title);
        setIsEditing(false);
    };

    return (
        <div className="todo-item">
            <div className="todo-left">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo)}
                />

                {isEditing ? (
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) =>
                            setEditTitle(e.target.value)
                        }
                    />
                ) : (
                    <span
                        className={`todo-title ${todo.completed ? "completed" : ""
                            }`}
                    >
                        {todo.title}
                    </span>
                )}
            </div>

            <div className="todo-right">
                {isEditing ? (
                    <>
                        <button className="save-btn" onClick={handleSave}>
                        save
                        </button>

                        <button className="cancel-btn" onClick={handleCancel}>
                            Cancel
                        </button>
                    </>
                ) : (
                    <button
                        className="edit-btn"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>
                )}
                <button
                    className="delete-btn"
                    onClick={() => deleteTodo(todo._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;