const express = require('express');
const router = new express.Router();
const Task = require('../models/Task');

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.send(task);
    } catch (error) {
        res.status(400).send();
    }
});

router.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find();
        res.send(task);
    } catch (error) {
        res.status(500).send;
    }
});

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
});

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    console.log(updates);
    const allowUpdate = ['des', 'complete'];
    const isValideOperation = updates.every(update =>
        allowUpdate.includes(update)
    );
    if (!isValideOperation) {
        return res.status(400).send({ error: 'invalide update' });
    }
    try {
        const task = await Task.findById(req.params.id);
        updates.forEach(update => {
            task[update] = req.body[update];
        });
        await task.save();

        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true,
        // });
        console.log(task);
        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(404).send();
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
});

module.exports = router;
