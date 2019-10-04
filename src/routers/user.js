const express = require('express');
const router = new express.Router();
const User = require('../models/Users');

router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(400).send();
    }
});

router.get('/users', async (req, res) => {
    try {
        const user = await User.find();
        res.send(user);
    } catch (error) {
        res.status(500).send;
    }
});

router.post('/users/login', async (req, res) => {
    console.log(req.body.email, req.body.password);
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        console.log(user, 'hi');
        res.send(user);
    } catch (error) {
        res.status(400).send('something went wrong');
    }
    // return res.send('hi');
});

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);
        if (!user) {
            res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
});

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowUpdate = ['name', 'email', 'password', 'age'];
    const isValideOperation = updates.every(update =>
        allowUpdate.includes(update)
    );
    if (!isValideOperation) {
        return res.status(400).send({ error: 'invalide update' });
    }
    try {
        const user = await User.findById(req.params.id);
        updates.forEach(update => {
            user[update] = req.body[update];
        });
        await user.save();
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true,
        // });
        console.log(user);
        if (!user) {
            res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(404).send();
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
});

module.exports = router;
