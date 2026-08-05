import { useEffect, useState } from "react";
import axios from "axios";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");


    // Get all todos
    const fetchTodos = async () => {
        try {
            const response = await axios.get("https://mern-todo-backend-udv5.onrender.com");
            setTodos(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const filteredTodos = todos.filter((todo) => {
        const matchSearch = todo.title
            .toLowerCase()
            .includes(search.toLowerCase());

        if (filter === "completed") {
            return matchSearch && todo.completed;
        }

        if (filter === "pending") {
            return matchSearch && !todo.completed;
        }

        return matchSearch;
    });

    // Delete todo
    const deleteTodo = async (id) => {
        try {
            await axios.delete(`https://mern-todo-backend-udv5.onrender.com/${id}`);
            fetchTodos();
        } catch (error) {
            console.log(error);
        }
    };

    const toggleComplete = async (todo) => {
        try {
            await axios.put(`https://mern-todo-backend-udv5.onrender.com/${todo._id}`, {
                title: todo.title,
                completed: !todo.completed,
            });

            fetchTodos();
        } catch (error) {
            console.log(error);
        }
    };

    const updateTodo = async (id, title, completed) => {
        try {
            await axios.put(`https://mern-todo-backend-udv5.onrender.com/${id}`, {
                title,
                completed,
            });

            fetchTodos();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="app">
            <h1>Todo App</h1>
            <input
                className="search"
                type="text"
                placeholder="Search Todo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="filter-buttons">
                <button onClick={() => setFilter("all")}>
                    All
                </button>

                <button onClick={() => setFilter("completed")}>
                    Completed
                </button>

                <button onClick={() => setFilter("pending")}>
                    Pending
                </button>
            </div>
            <AddTodo fetchTodos={fetchTodos} />

            <TodoList
                todos={filteredTodos}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default App;