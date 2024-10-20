import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Record() {
  const [form, setForm] = useState({
    name: "",
    personalStatement: "",
    level: "",
    email: "",
    preferredService: "",
    hairType: "",
    phoneNumber: "",
    stylistHairstylesOffered: "",
    stylistCertification: "",
    yearsExperience: "",
  });
  // const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined; 
      if(!id) return;
      const response = await fetch(
        `http://localhost:5050/record/${params.id.toString()}`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        console.warn(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(record);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

async function onSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.level) {
      alert("Please fill out all required fields.");
      return; // Exit the function if validation fails
    }
    const person = { ...form };
    try {
      const response = await fetch(`http://localhost:5050/record${params.id ? "/"+params.id : ""}`, {
        method: `${params.id ? "PATCH" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      setForm({ name: "", 
        personalStatement: "", 
        level: "" , 
        email: "", 
        preferredService: "", 
        hairType: "", 
        phoneNumber: "", 
        stylistHairstylesOffered: "",
        stylistCertification: "",
        yearsExperience: "",});
      navigate("/");
    }
  }

   return (
    <div className="max-w-4xl mx-auto p-6 bg-white border-2 border-gray-100 rounded-lg shadow-lg mt-2">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {params.id ? "Edit Profile" : "Create Profile"}
      </h2>
      <form onSubmit={onSubmit}>
        {/* Personal Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Personal Information
            </h3>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="First Last"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="yourname@example.com"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="(555) 555-5555"
              value={form.phoneNumber}
              onChange={(e) => updateForm({ phoneNumber: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Role
            </label>
            <select
              id="level"
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              value={form.level}
              onChange={(e) => updateForm({ level: e.target.value })}
              required
            >
              <option value="">Select Role</option>
              <option value="Stylist">Stylist</option>
              <option value="Customer">Customer</option>
            </select>
          </div>
        </div>

        {/* Stylist Details Section */}
        {form.level === "Stylist" && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Stylist Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label
                  htmlFor="personalStatement"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Personal Statement (max 200 characters)
                </label>
                <textarea
                  id="personalStatement"
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Tell us about yourself..."
                  value={form.personalStatement}
                  onChange={(e) => updateForm({ personalStatement: e.target.value })}
                  rows={4}
                  maxLength={200} // Limit to 200 characters
                />
              </div>
              <div className="text-sm text-gray-500">
                  {form.personalStatement?.length || 0}/200 characters
                </div>
              <div>
                <label
                  htmlFor="stylistHairstylesOffered"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Hairstyles Offered
                </label>
                <input
                  type="text"
                  id="stylistHairstylesOffered"
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="e.g., fades, cornrows"
                  value={form.stylistHairstylesOffered}
                  onChange={(e) =>
                    updateForm({ stylistHairstylesOffered: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="stylistCertification"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Certifications
                </label>
                <input
                  type="text"
                  id="stylistCertification"
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="e.g., Licensed Barber"
                  value={form.stylistCertification}
                  onChange={(e) =>
                    updateForm({ stylistCertification: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="yearsExperience"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="yearsExperience"
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="e.g., 5"
                  value={form.yearsExperience}
                  onChange={(e) => updateForm({ yearsExperience: e.target.value })}
                />
              </div>
            </div>
          </div>
        )}

        {/* Customer Preferences Section */}
        {form.level === "Customer" && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Customer Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="hairType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Hair Type
                </label>
                <select
                  id="hairType"
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:ring-pink-500 focus:border-pink-500"
                  value={form.hairType}
                  onChange={(e) => updateForm({ hairType: e.target.value })}
                >
                  <option value="">Select Hair Type</option>
                  <option value="1A">1A</option>
                  <option value="1B">1B</option>
                  <option value="1C">1C</option>
                  <option value="2A">2A</option>
                  <option value="2B">2B</option>
                  <option value="2C">2C</option>
                  <option value="3A">3A</option>
                  <option value="3B">3B</option>
                  <option value="3C">3C</option>
                  <option value="4A">4A</option>
                  <option value="4B">4B</option>
                  <option value="4C">4C</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="preferredService"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Services
                </label>
                <input
                  type="text"
                  id="preferredService"
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="e.g., Haircut, Coloring"
                  value={form.preferredService}
                  onChange={(e) =>
                    updateForm({ preferredService: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-pink-500 text-white rounded-md shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
}