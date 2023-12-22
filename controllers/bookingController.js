// const express = require('express');
// const Room = require('../models/roomModels');
// const BookingDatabase = require('../database/DatabaseBooking');

// // Define the Booking controller object
// const BookingController = {
//     // Method to create a new booking
//     createBooking: async (req, res) => {
//         try {
//             const body = req.body;
//             const RoomId = body.roomId;
//             const guestName = body.guestName;
//             const checkInDate = body.checkInDate;
//             const checkOutDate = body.checkOutDate;
//             const room = await Room.findById(RoomId);

//             if (!room) {
//                 return res.status(404).json({ message: "Room not found" });
//             }
//             else {

//                 const hasbeenbooked = await BookingDatabase.getBookingByroomId(RoomId);

//                 if (hasbeenbooked) {
//                     res.status(200).json({ message: "reserved" });
//                 }
//                 else {

//                     const newobj = Object.assign({}, {
//                         RoomId: RoomId,
//                         guestName: guestName,
//                         checkInDate: checkInDate,
//                         checkOutDate: checkOutDate,
//                         room: room
//                     });

//                     const response = await BookingDatabase.createBooking(newobj);

//                 }

//                 // const newBooking = await Booking.create(req.body);
//                 // room.bookings.push(newBooking);
//                 // await room.save();

//                 // res.status(200).json(newBooking);

//             }
//         } catch (error) {
//             console.log(error.message);
//             res.status(500).json({ message: error.message });
//         }
//     }
// };

// module.exports = BookingController;


const Car = require('../models/carModels.js');
const Booking = require('../models/bookingModels.js');

// GET all Cars
const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json(cars);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// GET a single car by ID
const getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);

        if (!car) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json(car);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// CREATE a new car
const createCar = async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(201).json(newCar);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// UPDATE a car by ID
const updateCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCar = await Car.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCar) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json(updatedCar);
    } catch (error) {
        console.log(error.message); // Add this line to log the error message
        res.status(500).json({ message: error.message });
    }
};

// DELETE a car by ID
const deleteCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCar = await Car.findByIdAndDelete(id);

        if (!deletedCar) {
            return res.status(404).json({ message: "Car not found" });
        }

        res.status(200).json({ message: "Car deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    updateCarById,
    deleteCarById,
};


// GET all bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// GET a single booking by ID
const getBookingById = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findById(id);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json(booking);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// CREATE a new booking
const createBooking = async (req, res) => {
    try {
        const newBooking = await Booking.create(req.body);
        res.status(201).json(newBooking);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// UPDATE a booking by ID
const updateBookingById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json(updatedBooking);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

// DELETE a booking by ID
const deleteBookingById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBooking = await Booking.findByIdAndDelete(id);

        if (!deletedBooking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBookings,
    getBookingById,
    createBooking,
    updateBookingById,
    deleteBookingById,
};
