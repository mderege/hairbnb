import React, { useState, useEffect } from 'react';

const ClientDashboard = ({ user }) => {
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
        <div className="max-w-6xl mx-auto p-6">
            <header className="relative h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mb-6 flex items-center justify-center shadow-lg">
                <h1 className="text-5xl font-bold text-white">
                    Welcome, {clientData.name}!
                </h1>
            </header>

            {/* Profile Information Section */}
            <section className="mb-8 bg-white border-2 border-gray-100 rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Profile Information</h2>
                <div>
                    <p><strong>Name:</strong>
                        <input
                            type="text"
                            value={clientData.name}
                            onChange={(e) => handleEditInfo("name", e.target.value)}
                            className="mt-2 p-2 border border-gray-300 rounded"
                        />
                    </p>
                    <p><strong>Email:</strong> {clientData.email}</p>
                    <p><strong>Preferred Services:</strong>
                        <textarea
                            value={clientData.preferredService}
                            onChange={(e) => handleEditInfo("preferredService", e.target.value)}
                            className="mt-2 p-2 border border-gray-300 rounded"
                        />
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ClientDashboard;
