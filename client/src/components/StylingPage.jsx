import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StylistPage = () => {
  const { id } = useParams(); // Get the stylist's ID from the URL
  const [stylist, setStylist] = useState(null);
  const [posts, setPosts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchStylist = async () => {
      try {
        const response = await fetch(`http://localhost:5050/record/${id}`);
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
    setPosts([
      { id: 1, image: "https://live-essnc.s3.amazonaws.com/uploads/2024/06/sleek-blunt-bob.png", description: "Classic Bob Cut" },
      { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuvLiv6FufJ1hBdu2VWyzrHR48H4rErCJIA&s", description: "Layered Hair" },
    ]);

    setReviews([
      { id: 1, name: "Jane Doe", rating: 5, comment: "Amazing experience!" },
      { id: 2, name: "John Smith", rating: 4, comment: "Very professional!" },
    ]);

  }, [id]);

  const sendEmail = async () => {
    try {
      const response = await axios.post("http://localhost:5050/api/sendmail", {
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
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        Welcome to {stylist.name}'s Page
      </h1>

      {/* Stylist Profile Section */}
      <section className="mb-12 bg-white border-2 border-gray-100 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{stylist.name}'s Profile</h2>
        <p>{stylist.personalStatement}</p>
        <div className="mt-4 space-y-1">
          <p><strong>Experience:</strong> {stylist.yearsExperience || 'N/A'} years</p>
          <p><strong>Hairstyles Offered:</strong> {stylist.stylistHairstylesOffered || 'N/A'}</p>
          <p><strong>Certifications:</strong> {stylist.stylistCertification || 'N/A'}</p>
        </div>
      </section>

      {/* Stylist Portfolio Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Recent Styles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.description}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
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
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Available Booking Times</h2>
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
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4 p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleBooking}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          Book Now
        </button>
      </section>
    </div>
  );
};

export default StylistPage;