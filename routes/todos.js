import express, {Router} from 'express'
import { TodoController } from '../controllers/todos.js'

const router = Router()

router.post('/new-todo', async (req, res) => {
    try {
        await TodoController.createTodo(req, res);
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
});

router.get('/', async (req, res) => {
    try {
        await TodoController.initTodos(); // Ensure that todos are initialized
        res.json(TodoController.TODOS);
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
});

router.patch('/:id', async (req, res) => {
    try {
        await TodoController.updateTodo(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await TodoController.deleteTodo(req, res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router