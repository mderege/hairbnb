// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ProfilePage = () => {
//   const { userId } = useParams(); // Retrieve userId from the URL
//   const [profile, setProfile] = useState(null);
//   const [appointments, setAppointments] = useState({
//     upcoming: [],
//     past: [],
//   });

//   useEffect(() => {
//     console.log("User ID from URL:", userId); // Log to check if userId is correct

//     const fetchProfile = async () => {
//       try {
//         // Use userId instead of id
//         const response = await axios.get(`https://hairbnbbe-9f629b6e0127.herokuapp.com/profile/${userId}`);
//         console.log("API Response:", response);

//         if (response.status === 200) {
//           const profileData = response.data;
//           setProfile(profileData);

//           const currentTime = new Date();
//           const upcomingAppointments = profileData.appointments.filter(
//             (appt) => new Date(appt.time) > currentTime
//           );
//           const pastAppointments = profileData.appointments.filter(
//             (appt) => new Date(appt.time) <= currentTime
//           );

//           setAppointments({
//             upcoming: upcomingAppointments,
//             past: pastAppointments,
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };

//     if (userId) { // Ensure userId is defined before fetching
//       fetchProfile();
//     }
//   }, [userId]);

//   const handleCancel = async (appointmentId) => {
//     try {
//       await axios.delete(`https://hairbnbbe-9f629b6e0127.herokuapp.com/appointments/${appointmentId}`);
//       setAppointments((prevAppointments) => ({
//         ...prevAppointments,
//         upcoming: prevAppointments.upcoming.filter(
//           (appt) => appt.id !== appointmentId
//         ),
//       }));
//       alert('Appointment canceled');
//     } catch (error) {
//       console.error('Error cancelling appointment:', error);
//     }
//   };

//   if (!profile) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
//         {profile.name}'s Profile
//       </h1>
//       <section className="mb-6">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-2">Contact Info</h2>
//         <p><strong>Email:</strong> {profile.email}</p>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upcoming Appointments</h2>
//         {appointments.upcoming.length > 0 ? (
//           <ul className="space-y-4">
//             {appointments.upcoming.map((appointment) => (
//               <li
//                 key={appointment.id}
//                 className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
//               >
//                 <span>{new Date(appointment.time).toLocaleString()}</span>
//                 <button
//                   onClick={() => handleCancel(appointment.id)}
//                   className="px-4 py-2 bg-red-600 text-white rounded-lg"
//                 >
//                   Cancel
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No upcoming appointments.</p>
//         )}
//       </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Past Appointments</h2>
//         {appointments.past.length > 0 ? (
//           <ul className="space-y-4">
//             {appointments.past.map((appointment) => (
//               <li key={appointment.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                 {new Date(appointment.time).toLocaleString()}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No past appointments.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ProfilePage;

// ProfilePage.jsx
// import React from 'react';

// const ProfilePage = () => {
//     // Hardcoded data for Simone
//     const user = {
//         id: "67333712c31376a1bd7f3d6a",
//         name: "Simone",
//         personalStatement: "Hello, I'm Simone",
//         level: "Stylist",
//         email: "sim@gmail.com",
//         password: "sim123456",
//         preferredService: "",
//         hairType: "",
//         stylistHairstylesOffered: [
//             { name: "Classic Bob Cut", time: 30, price: 45 },
//         ],
//         stylistCertification: "Licensed Color",
//         yearsExperience: "5 years",
//         stylistAvailabilities: ["Monday 10:00 AM", "Wednesday 3:00 PM"]
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-6">
//             <header className="relative h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mb-6 flex items-center justify-center shadow-lg">
//                 <h1 className="text-5xl font-bold text-white">
//                     Welcome, {user.name}!
//                 </h1>
//             </header>

//             {/* User Profile Section */}
//             <section className="mb-8 bg-white border-2 border-gray-100 rounded-lg shadow-lg p-8">
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-4">Profile Information</h2>
//                 <p><strong>Name:</strong> {user.name}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 <p><strong>Level:</strong> {user.level}</p>
//                 <p><strong>Personal Statement:</strong> {user.personalStatement}</p>
//                 <p><strong>Certification:</strong> {user.stylistCertification}</p>
//                 <p><strong>Experience:</strong> {user.yearsExperience}</p>
//             </section>

//             {/* Services Offered Section */}
//             <section className="mb-8">
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-4">Hairstyles Offered</h2>
//                 {user.stylistHairstylesOffered.length > 0 ? (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                         {user.stylistHairstylesOffered.map((style, index) => (
//                             <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//                                 <h3 className="text-xl font-semibold text-gray-800">{style.name}</h3>
//                                 <p>Time: {style.time} mins</p>
//                                 <p>Price: ${style.price}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <p className="text-gray-600">No services listed.</p>
//                 )}
//             </section>

//             {/* Availability Section */}
//             <section className="mb-8">
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-4">Availability</h2>
//                 {user.stylistAvailabilities.length > 0 ? (
//                     <ul className="list-disc list-inside space-y-2">
//                         {user.stylistAvailabilities.map((time, index) => (
//                             <li key={index} className="text-gray-600">{time}</li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p className="text-gray-600">No available slots listed.</p>
//                 )}
//             </section>
//         </div>
//     );
// };

// export default ProfilePage;


import React, { useState, useEffect, useContext } from 'react';
import { useOutletContext } from "react-router-dom";
import { UserContext } from './UserContext';

const ProfilePage = () => {
    // Defaulting to an empty object to prevent undefined errors.
    const { user } = useContext(UserContext);
    const [stylistData, setStylistData] = useState({
        name: "",
        email: "",
        level: "Stylist",
        stylistAvailabilities: [],
        stylistHairstylesOffered: [],
        personalStatement: "",
        stylistCertification: "",
        yearsExperience: "",
    });

    const [newSlot, setNewSlot] = useState("");
    const [newHairstyle, setNewHairstyle] = useState({
        name: "",
        time: "",
        price: "",
    });

    // Initialize stylistData with the user data (if available)
    useEffect(() => {
        if (user) {
            setStylistData({
                ...user,  // Assuming `user` contains all required fields.
                stylistAvailabilities: user.stylistAvailabilities || [],
                stylistHairstylesOffered: user.stylistHairstylesOffered || [],
            });
        }
    }, [user]);

    const handleAddSlot = () => {
        if (newSlot.trim()) {
            setStylistData({
                ...stylistData,
                stylistAvailabilities: [...stylistData.stylistAvailabilities, newSlot],
            });
            setNewSlot("");
        }
    };

    const handleRemoveSlot = (slot) => {
        setStylistData({
            ...stylistData,
            stylistAvailabilities: stylistData.stylistAvailabilities.filter(
                (s) => s !== slot
            ),
        });
    };

    const handleAddHairstyle = () => {
        if (newHairstyle.name && newHairstyle.time && newHairstyle.price) {
            const updatedHairstyles = [
                ...stylistData.stylistHairstylesOffered,
                newHairstyle,
            ];
            setStylistData({
                ...stylistData,
                stylistHairstylesOffered: updatedHairstyles,
            });
            setNewHairstyle({ name: "", time: "", price: "" });
        }
    };

    const handleRemoveHairstyle = (index) => {
        const updatedHairstyles = stylistData.stylistHairstylesOffered.filter(
            (_, i) => i !== index
        );
        setStylistData({
            ...stylistData,
            stylistHairstylesOffered: updatedHairstyles,
        });
    };

    const handleEditInfo = (key, value) => {
        setStylistData({
            ...stylistData,
            [key]: value,
        });
    };

    if (!stylistData || !stylistData.name) return <p>Loading...</p>; // Check for stylistData loading

    return (
        <div className="max-w-6xl mx-auto p-6">
            <header className="relative h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mb-6 flex items-center justify-center shadow-lg">
                <h1 className="text-5xl font-bold text-white">
                    Welcome, {stylistData.name}!
                </h1>
            </header>

            {/* Profile Information Section */}
            <section className="mb-8 bg-white border-2 border-gray-100 rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Profile Information</h2>
                <div>
                    <p><strong>Name:</strong>
                        <input
                            type="text"
                            value={stylistData.name}
                            onChange={(e) => handleEditInfo("name", e.target.value)}
                            className="mt-2 p-2 border border-gray-300 rounded"
                        />
                    </p>
                    <p><strong>Email:</strong> {stylistData.email}</p>
                    <p><strong>Level:</strong> {stylistData.level}</p>
                    <p><strong>Personal Statement:</strong>
                        <textarea
                            value={stylistData.personalStatement}
                            onChange={(e) => handleEditInfo("personalStatement", e.target.value)}
                            className="mt-2 p-2 border border-gray-300 rounded"
                        />
                    </p>
                    <p><strong>Certification:</strong> {stylistData.stylistCertification}</p>
                    <p><strong>Experience:</strong> {stylistData.yearsExperience}</p>
                </div>
            </section>

            {/* Services Offered Section */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Hairstyles Offered</h2>
                {stylistData.stylistHairstylesOffered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {stylistData.stylistHairstylesOffered.map((style, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-800">{style.name}</h3>
                                <p>Time: {style.time} mins</p>
                                <p>Price: ${style.price}</p>
                                <button
                                    onClick={() => handleRemoveHairstyle(index)}
                                    className="mt-2 text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No services listed.</p>
                )}
                <div>
                    <h3>Add New Hairstyle</h3>
                    <input
                        type="text"
                        placeholder="Hairstyle Name"
                        value={newHairstyle.name}
                        onChange={(e) => setNewHairstyle({ ...newHairstyle, name: e.target.value })}
                        className="mt-2 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="number"
                        placeholder="Time (mins)"
                        value={newHairstyle.time}
                        onChange={(e) => setNewHairstyle({ ...newHairstyle, time: e.target.value })}
                        className="mt-2 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={newHairstyle.price}
                        onChange={(e) => setNewHairstyle({ ...newHairstyle, price: e.target.value })}
                        className="mt-2 p-2 border border-gray-300 rounded"
                    />
                    <button
                        onClick={handleAddHairstyle}
                        className="mt-2 p-2 bg-green-500 text-white rounded"
                    >
                        Add Hairstyle
                    </button>
                </div>
            </section>

            {/* Availability Section */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Availability</h2>
                {stylistData.stylistAvailabilities.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2">
                        {stylistData.stylistAvailabilities.map((time, index) => (
                            <li key={index} className="text-gray-600">
                                {time}{" "}
                                <button
                                    onClick={() => handleRemoveSlot(time)}
                                    className="text-red-500 ml-2"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No available slots listed.</p>
                )}
                <div>
                    <h3>Add New Availability</h3>
                    <input
                        type="text"
                        placeholder="New Slot"
                        value={newSlot}
                        onChange={(e) => setNewSlot(e.target.value)}
                        className="mt-2 p-2 border border-gray-300 rounded"
                    />
                    <button
                        onClick={handleAddSlot}
                        className="mt-2 p-2 bg-blue-500 text-white rounded"
                    >
                        Add Slot
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProfilePage;
