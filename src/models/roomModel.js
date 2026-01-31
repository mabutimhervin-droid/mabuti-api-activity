const rooms = [
    {
        ide: 101,
        type: 'Single',
        price: 100,
        isBooked: false,
        features: ['Wifi', 'TV'],
    },
    {
        id: 102,
        type: 'Double',
        price: 150,
        isBooked: true,
        features: ['Wifi', 'TV', 'Mini-Bar'],
    },
    {
        id: 201,
        type: 'Suite',
        price: 300,
        isBooked: true,
        features: ['Wifi', 'TV', 'Mini-Bar', 'Jacuzzi'],
    },
    {
        id: 202,
        type: 'Single',
        price: 100,
        isBooked: true,
        features: ['Wifi', 'TV'],
    }
];

module.exports = rooms;