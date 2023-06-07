import { useEffect, useState } from "react";


const MyBookings = () => {
    const [bookingsData, setBookingsData] = useState('');
    console.log(bookingsData);


    useEffect(() => {
        const data = localStorage.getItem('bookingData');
        if (data) {
            const parsedData = JSON.parse(data);
            setBookingsData(parsedData);
        } else {
            setBookingsData('No data found');
        }
    }, [])



    return (
        <main className="px-4 py-12 md:p-28">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Movie Name</th>
                            <th>Language</th>
                            <th>Duration</th>
                            <th>Booking Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(bookingsData) ? (
                                bookingsData.map((booking, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{booking.movieName}</td>
                                        <td>{booking.movieLang}</td>
                                        <td>{booking.duration}</td>
                                        <td>{booking.yourName}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No bookings found</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default MyBookings;