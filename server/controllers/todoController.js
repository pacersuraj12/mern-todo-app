const Todo = require("../models/Todo");

// Add Todo
const addTodo = async (req, res) => {
    console.log(req.body);

    try {
        const { title } = req.body;

        const todo = await Todo.create({
            title,
        });

        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Get Todos
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();

        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found",
            });
        }

        res.status(200).json({
            message: "Todo deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {
                title,
                completed,
            },
            {
                new: true,
            }
        );

        if (!updatedTodo) {
            return res.status(404).json({
                message: "Todo not found",
            });
        }

        res.status(200).json(updatedTodo);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Export
module.exports = {
    addTodo,
    getTodos,
    deleteTodo,
    updateTodo,
};