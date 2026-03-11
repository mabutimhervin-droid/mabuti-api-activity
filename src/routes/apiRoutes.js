const express = require('express');
const router = express.Router();

const {protect, authorize} = require('../middleware/authMiddleware')

const {
    getAllRooms,
    createRoom,
    getRoomById,
    updateRoom,
    deleteRoom,
} = require('../controllers/roomController');

router.get('/rooms', getAllRooms);
router.post('/rooms', protect, authorize('admin', 'manager'), createRoom);
router.get('/rooms/:id', getRoomById);
router.put('/rooms/=id', updateRoom);
router.delete('/room/:id', deleteRoom);

module.exports = router;