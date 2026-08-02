import TodoItem from "./TodoItem";

function TodoList({
    todos,
    deleteTodo,
    toggleComplete,
    updateTodo,
}) {
    return (
        <div>
            <h2>Todo List</h2>

            {todos.length === 0 ? (
                <p>No Todos Found</p>
            ) : (
                todos.map((todo) => (
                    <TodoItem
                        key={todo._id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleComplete={toggleComplete}
                        updateTodo={updateTodo}
                    />
                ))
            )}
        </div>
    );
}

export default TodoList;