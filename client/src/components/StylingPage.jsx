import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StylistPage = () => {
  const { id } = useParams(); // Get the stylist's ID from the URL
  const [stylist, setStylist] = useState(null);
  // const [posts, setPosts] = useState([]); // might no longer be necessary
  const [reviews, setReviews] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchStylist = async () => {
      try {
        const response = await fetch(`https://hairbnbbe-9f629b6e0127.herokuapp.com/record/${id}`);
        if (!response.ok) {
          console.error('Failed to fetch stylist data');
          return;
        }
        const stylistData = await response.json();
        setStylist(stylistData);

        // Map stylistAvailabilities to bookings
        const availableTimes = stylistData.stylistAvailabilities.map((timeString, index) => ({
          id: index + 1,
          time: new Date(timeString).toLocaleString('en-US', {
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }),
        }));

        setBookings(availableTimes);
        console.log('Bookings:', availableTimes); // Debug output
      } catch (error) {
        console.error('Error fetching stylist data:', error);
      }
    };

    fetchStylist(); // Fetch stylist details on component mount

    // Sample data for posts and reviews (You might want to replace this with a real API call)
    // setPosts([
    //   { id: 1, 
    //     image: "https://live-essnc.s3.amazonaws.com/uploads/2024/06/sleek-blunt-bob.png", 
    //     description: "Classic Bob Cut", 
    //     price: 20 },
    //   { id: 2, 
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuvLiv6FufJ1hBdu2VWyzrHR48H4rErCJIA&s", 
    //     description: "Layered Hair", 
    //     price: 30 },
    // ]);

    setReviews([
      { id: 1, name: "Jane Doe", rating: 5, comment: "Amazing experience!" },
      { id: 2, name: "John Smith", rating: 4, comment: "Very professional!" },
    ]);

  }, [id]);

  const sendEmail = async () => {
    try {
      const response = await axios.post("https://hairbnbbe-9f629b6e0127.herokuapp.com/api/sendmail", {
        email,
        bookingTime: selectedTime,
        stylistName: stylist.name
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleBooking = () => {
    if (selectedTime) {
      alert(`You've booked a slot at ${selectedTime}`);
      // Remove the booked time from the bookings array
      setBookings(bookings.filter((booking) => booking.time !== selectedTime));
      sendEmail();
      setSelectedTime(null); // Clear the selected time
    } else {
      alert("Please select a time.");
    }
  };

  if (!stylist) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="relative h-32 bg-gradient-to-r rounded-lg mb-6 from-pink-500 to-red-500 flex items-center justify-center shadow-xl">
        <h1 className="text-center text-5xl font-bold text-white">
          {stylist.name}'s Page
        </h1>
      </header>

      {/* Stylist Profile Section */}
      <section className="mb-8 bg-white border-2 border-gray-100 rounded-lg shadow-xl p-8">
          <div className="flex flex-col md:flex-row md: items-center items-center md:justify-center">
            {/* Profile Image */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200 flex-shrink-0">
              <img
                src="https://via.placeholder.com/150" // Replace with stylist's image if available
                alt={stylist.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Profile Details */}
            <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left max-w-md">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{stylist.name}</h2>
              <p className="text-gray-600">{stylist.personalStatement}</p>
              <div className="mt-4 space-y-2">
                <p><strong>Experience:</strong> {stylist.yearsExperience || 'N/A'} years</p>
                <p><strong>Certifications:</strong> {stylist.stylistCertification || 'N/A'}</p>
                <p><strong>Email:</strong> {stylist.email || 'N/A'}</p>
              </div>
            </div>
          </div>
        </section>

      {/* Stylist Portfolio Section */}
      <section className="border-none mb-0 pb-4 pt-4">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Hairstyles Offered</h2>
          {Array.isArray(stylist.stylistHairstylesOffered) && stylist.stylistHairstylesOffered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {stylist.stylistHairstylesOffered.map((style, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              // src="https://via.placeholder.com/150" // Replace with actual image if available
              src="https://live-essnc.s3.amazonaws.com/uploads/2024/06/sleek-blunt-bob.png" // Replace with actual image if available
              alt={style.name}
              className="w-full h-60 object-cover"
            />
             <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{style.name}</h3>
                <p className="text-gray-600">Time: {style.time} mins</p>
                <p className="text-gray-600">Price: ${style.price}</p>
              </div>
          </div>
        ))}
        </div>
      ) : (
        <p className="text-gray-600">No hairstyles offered.</p>
      )}     
      </section>

      {/* Customer Reviews Section */}
      <section className="mb-6 pt-4 pb-4">
        <h2 className="text-4xl font-semibold text-gray-700 mb-8">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border-1 border-black p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-800">{review.name}</p>
              <p className="text-yellow-500 mb-2">
                {`Rating: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}`}
              </p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
          
      {/* Booking Times Section */}

      {/* <section className="mb-0 pt-4">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Available Booking Times</h2>
        {bookings.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-4">
            {bookings.map((booking) => (
              <label key={booking.id} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="bookingTime"
                  value={booking.time}
                  className="form-radio h-5 w-5 text-blue-600"
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <span className="text-gray-600">{booking.time}</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No available booking times.</p>
        )}
        <button
          onClick={handleBooking}
          className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-200"
        >
          Book Now
        </button>
      </section> */}

      <section className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Book an Appointment</h2>
          {bookings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {bookings.map((booking) => (
                <label key={booking.id} className="flex items-center gap-2 border-2 bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                  <input
                    type="radio"
                    name="bookingTime"
                    value={booking.time}
                    className="form-radio h-5 w-5 text-pink-500"
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                  <span className="text-gray-800">{booking.time}</span>
                </label>
              ))}
            </div>
          ) : (
            <p className="mb-8 text-gray-500 text-center">No available booking times.</p>
          )}
          {/* <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            /> */}
            <button
              onClick={handleBooking}
              className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600 transition-colors duration-200"
            >
              Book Now
            </button>
          {/* </div> */}
        </section>


    </div>
  );
};

export default StylistPage;