import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [appointments, setAppointments] = useState({
    upcoming: [],
    past: [],
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5050/profile');
        console.log("API Response:", response); // Add this to inspect response
        if (response.status === 200) {
          const profileData = response.data;
          setProfile(profileData);
  
          const currentTime = new Date();
          const upcomingAppointments = profileData.appointments.filter(
            (appt) => new Date(appt.time) > currentTime
          );
          const pastAppointments = profileData.appointments.filter(
            (appt) => new Date(appt.time) <= currentTime
          );
  
          setAppointments({
            upcoming: upcomingAppointments,
            past: pastAppointments,
          });
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
  
    fetchProfile();
  }, []);

  const handleCancel = async (appointmentId) => {
    try {
      await axios.delete(`http://localhost:5050/appointments/${appointmentId}`);
      setAppointments((prevAppointments) => ({
        ...prevAppointments,
        upcoming: prevAppointments.upcoming.filter(
          (appt) => appt.id !== appointmentId
        ),
      }));
      alert('Appointment canceled');
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  };

  if (!profile) {
    return <div>Hi, I work</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        {profile.name}'s Profile
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Contact Info</h2>
        <p><strong>Email:</strong> {profile.email}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upcoming Appointments</h2>
        {appointments.upcoming.length > 0 ? (
          <ul className="space-y-4">
            {appointments.upcoming.map((appointment) => (
              <li
                key={appointment.id}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
              >
                <span>{new Date(appointment.time).toLocaleString()}</span>
                <button
                  onClick={() => handleCancel(appointment.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No upcoming appointments.</p>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Past Appointments</h2>
        {appointments.past.length > 0 ? (
          <ul className="space-y-4">
            {appointments.past.map((appointment) => (
              <li key={appointment.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                {new Date(appointment.time).toLocaleString()}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No past appointments.</p>
        )}
      </section>
    </div>
  );
};

export default ProfilePage;