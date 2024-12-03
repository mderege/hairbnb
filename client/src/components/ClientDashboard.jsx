import React, { useState, useEffect, useContext } from 'react';
import { useOutletContext } from "react-router-dom";
import { UserContext } from './UserContext';

const ClientDashboard = () => {
    const { user } = useContext(UserContext);
    const [clientData, setClientData] = useState(null);

    useEffect(() => {
        // Mock fetching client data based on the logged-in user
        const fetchedData = {
            ...user, // Assume `user` is passed as a prop
        };
        setClientData(fetchedData);
    }, [user]);

    const handleEditInfo = (key, value) => {
        setClientData({
            ...clientData,
            [key]: value,
        });
    };

    if (!clientData) return <p>Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Dashboard Header */}
            <header className="h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mb-6 flex items-center justify-center shadow-lg">
                <h1 className="text-4xl font-bold text-white">
                    Welcome, {clientData.name || "Guest"}!
                </h1>
            </header>

            {/* Profile Information Section */}
            <section className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Profile Information
                </h2>
                <div className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={clientData.name || ""}
                            onChange={(e) => handleEditInfo("name", e.target.value)}
                            className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email Display */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <p
                            id="email"
                            className="mt-1 p-2 bg-gray-100 border border-gray-300 rounded"
                        >
                            {clientData.email || "Not provided"}
                        </p>
                    </div>

                    {/* Preferred Services Textarea */}
                    <div>
                        <label
                            htmlFor="preferredService"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Preferred Services
                        </label>
                        <textarea
                            id="preferredService"
                            value={clientData.preferredService || ""}
                            onChange={(e) =>
                                handleEditInfo("preferredService", e.target.value)
                            }
                            className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                            rows="4"
                            placeholder="Describe your preferred services"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClientDashboard;
