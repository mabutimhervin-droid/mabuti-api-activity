const express = require('express');
const router = express.Router();

const rooms = require('../models/roomModel');

router.get('/rooms', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Rooms retrieved successfully",
        data: rooms
    });
});

router.post('/rooms', (req, res) => {
    const { id, type, price, status, features } = req.body;

    if (!id || !type || !price || !status) {
        return res.status(400).json({
            status: "error",
            message: "Missing required fields",
            data: null
        });
    }

    const newRoom = { id, type, price, status, features };
    rooms.push(newRoom);

    res.status(201).json({
        status: "success",
        message: "Room added successfully",
        data: newRoom
    });
});

router.put('/rooms/:id', (req, res) => {
    const roomId = parseInt(req.params.id);
    const room = rooms.find(r => r.id === roomId);

    if (!room) {
        return res.status(404).json({
            status: "error",
            message: "Room not found",
            data: null
        });
    }

    const { type, price, status, features } = req.body;

    room.type = type || room.type;
    room.price = price || room.price;
    room.status = status || room.status;
    room.features = features || room.features;

    res.status(200).json({
        status: "success",
        message: "Room updated successfully",
        data: room
    });
});

router.delete('/rooms/:id', (req, res) => {
    const roomId = parseInt(req.params.id);
    const index = rooms.findIndex(r => r.id === roomId);

    if (index === -1) {
        return res.status(404).json({
            status: "error",
            message: "Room not found",
            data: null
        });
    }

    const deletedRoom = rooms.splice(index, 1);

    res.status(200).json({
        status: "success",
        message: "Room deleted successfully",
        data: deletedRoom
    });
});

module.exports = router;
