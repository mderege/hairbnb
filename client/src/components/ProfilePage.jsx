import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

const ProfilePage = () => {
    const { user, setUser } = useContext(UserContext);
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

    const [isDirty, setIsDirty] = useState(false); // Track unsaved changes

    // Initialize stylistData with user data on mount
    useEffect(() => {
        if (user) {
            setStylistData({
                ...user,
                stylistAvailabilities: user.stylistAvailabilities || [],
                stylistHairstylesOffered: user.stylistHairstylesOffered || [],
            });
        }
    }, [user]);

    const handleFieldChange = (key, value) => {
        setStylistData({ ...stylistData, [key]: value });
        setIsDirty(true); // Mark as unsaved
    };

    const handleAddSlot = () => {
        if (newSlot.trim()) {
            setStylistData({
                ...stylistData,
                stylistAvailabilities: [...stylistData.stylistAvailabilities, newSlot],
            });
            setNewSlot("");
            setIsDirty(true); // Mark as unsaved
        }
    };

    const handleRemoveSlot = (slot) => {
        setStylistData({
            ...stylistData,
            stylistAvailabilities: stylistData.stylistAvailabilities.filter(
                (s) => s !== slot
            ),
        });
        setIsDirty(true); // Mark as unsaved
    };

    const handleAddHairstyle = () => {
        if (newHairstyle.name && newHairstyle.time && newHairstyle.price) {
            setStylistData({
                ...stylistData,
                stylistHairstylesOffered: [
                    ...stylistData.stylistHairstylesOffered,
                    newHairstyle,
                ],
            });
            setNewHairstyle({ name: "", time: "", price: "" });
            setIsDirty(true); // Mark as unsaved
        }
    };

    const handleRemoveHairstyle = (index) => {
        setStylistData({
            ...stylistData,
            stylistHairstylesOffered: stylistData.stylistHairstylesOffered.filter(
                (_, i) => i !== index
            ),
        });
        setIsDirty(true); // Mark as unsaved
    };

    const saveData = async () => {
        try {
            const response = await fetch("/api/stylist", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(stylistData),
            });

            if (!response.ok) {
                throw new Error("Failed to save data");
            }

            const savedData = await response.json();
            setStylistData(savedData); // Update local state
            setUser(savedData); // Update global context
            setIsDirty(false); // Reset dirty flag
            alert("Changes saved successfully!");
        } catch (error) {
            console.error("Error saving data:", error);
            alert("Failed to save changes. Please try again.");
        }
    };

    if (!stylistData || !stylistData.name) return <p>Loading...</p>;

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header */}
            <header className="relative h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mb-6 flex items-center justify-center shadow-lg">
                <h1 className="text-4xl font-bold text-white">
                    Welcome, {stylistData.name}!
                </h1>
            </header>

            {/* Profile Information Section */}
            <section className="mb-8 bg-white border border-gray-200 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Profile Information
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            value={stylistData.name}
                            onChange={(e) => handleFieldChange("name", e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <p className="mt-1 p-2 bg-gray-100 border border-gray-300 rounded">
                            {stylistData.email}
                        </p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Personal Statement
                        </label>
                        <textarea
                            value={stylistData.personalStatement}
                            onChange={(e) =>
                                handleFieldChange("personalStatement", e.target.value)
                            }
                            className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                            rows="4"
                        />
                    </div>
                </div>
            </section>

            {/* Services Offered Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Hairstyles Offered
                </h2>
                {stylistData.stylistHairstylesOffered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {stylistData.stylistHairstylesOffered.map((style, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                            >
                                <h3 className="text-lg font-medium text-gray-800">
                                    {style.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Time: {style.time} mins
                                </p>
                                <p className="text-sm text-gray-600">
                                    Price: ${style.price}
                                </p>
                                <button
                                    onClick={() => handleRemoveHairstyle(index)}
                                    className="mt-2 text-sm text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No services listed.</p>
                )}
                <div className="mt-4 space-y-2">
                    <h3 className="text-sm font-medium text-gray-700">Add New Hairstyle</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        value={newHairstyle.name}
                        onChange={(e) =>
                            setNewHairstyle({ ...newHairstyle, name: e.target.value })
                        }
                        className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                    />
                    <input
                        type="number"
                        placeholder="Time (mins)"
                        value={newHairstyle.time}
                        onChange={(e) =>
                            setNewHairstyle({ ...newHairstyle, time: e.target.value })
                        }
                        className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={newHairstyle.price}
                        onChange={(e) =>
                            setNewHairstyle({ ...newHairstyle, price: e.target.value })
                        }
                        className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                    />
                    <button
                        onClick={handleAddHairstyle}
                        className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Add Hairstyle
                    </button>
                </div>
            </section>

            {/* Availability Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Availability
                </h2>
                {stylistData.stylistAvailabilities.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2">
                        {stylistData.stylistAvailabilities.map((time, index) => (
                            <li key={index} className="text-gray-600">
                                {time}
                                <button
                                    onClick={() => handleRemoveSlot(time)}
                                    className="ml-2 text-sm text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No available slots listed.</p>
                )}
                <div className="mt-4 space-y-2">
                    <h3 className="text-sm font-medium text-gray-700">Add New Slot</h3>
                    <input
                        type="text"
                        placeholder="New Slot"
                        value={newSlot}
                        onChange={(e) => setNewSlot(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                    />
                    <button
                        onClick={handleAddSlot}
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add Slot
                    </button>
                </div>
            </section>

            {/* Save Button */}
            <div className="flex justify-end mb-8">
                <button
                    onClick={saveData}
                    disabled={!isDirty} // Disable button if no changes
                    className={`p-2 text-white rounded ${
                        isDirty
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-gray-300 cursor-not-allowed"
                    }`}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
