const Booking = require("../models/bookingModels");

const BookingDatabase = {
    // Method to create a new booking
    createBooking: async (book = null) => {
        try {

            if (book) {
                
                const newobj = Object.assign({}, {
                    carId: book.carId,
                    roomId: book.RoomId,
                    driverName: book.driverName,
                    guestName: book.guestName,
                    checkInDate: book.checkInDate,
                    checkOutDate: book.checkOutDate,
                });

                console.log({ newobj });

                const response = await Booking.findOneAndUpdate(newobj);
                console.log({ response });

            }

        } catch (error) {

        }
    },
    getBookingByroomId: async (roomId = "") => {
        if(carId){
            const exitbooking = await Booking.findOne({
                carId: carId,
            });
            if (exitbooking) {
                console.log({ exitbooking });
                return true;
            }
            else {
                console.log("error");
                return false;
            }
            
        }

        if (roomId) {
            const exitbooking = await Booking.findOne({
                roomId: roomId,
            });
            if (exitbooking) {
                console.log({ exitbooking });
                return true;
            }
            else {
                console.log("error");
                return false;
            }
        }
        else {

        }
    }
};

module.exports = BookingDatabase;