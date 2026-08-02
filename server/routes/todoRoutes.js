const express = require("express");
const router = express.Router();

const {
    addTodo,
    getTodos,
    deleteTodo,
     updateTodo,
} = require("../controllers/todoController");

// Create Todo
router.post("/", addTodo);

// Get All Todos
router.get("/", getTodos);

// Delete Todo
router.delete("/:id", deleteTodo);
// update todo
router.put("/:id", updateTodo);

module.exports = router;