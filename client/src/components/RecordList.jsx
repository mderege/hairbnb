import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import the hook


export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    distance: null,
    styleName: "",
    priceMin: null,
    priceMax: null,
    availability: null,
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/record/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
  // }, [records.length]);
  }, []);

  const toggleFilter = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter]
    }));
  };

  // async function deleteRecord(id) {
  //   await fetch(`http://localhost:5050/record/${id}`, {
  //     method: "DELETE",
  //   });
  //   const newRecords = records.filter((el) => el._id !== id);
  //   setRecords(newRecords);
  // }

// const filteredRecords = records.filter((record) =>
//   record.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   record.personalStatement?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   record.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   record.level?.toLowerCase().includes(searchQuery.toLowerCase())
// );

const filteredRecords = records
  .filter((record) =>
    record.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.personalStatement?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.email?.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .filter((record) => {
    if (filters.styleName) {
      const offeredStyles = Array.isArray(record.stylistHairstylesOffered)
        ? record.stylistHairstylesOffered
        : [];
      const matchesStyle = offeredStyles.some((style) =>
        style.name.toLowerCase().includes(filters.styleName.toLowerCase())
      );
      if (!matchesStyle) {
        return false;
      }
    }
    // Price filter
    if (filters.priceMin !== null || filters.priceMax !== null) {
      const minPrice = parseFloat(filters.priceMin) || 0;
      const maxPrice = parseFloat(filters.priceMax) || Infinity;
      const offeredStyles = Array.isArray(record.stylistHairstylesOffered)
        ? record.stylistHairstylesOffered
        : [];
      const matchesPrice = offeredStyles.some((style) => {
        const price = parseFloat(style.price);
        return price >= minPrice && price <= maxPrice;
      });
      if (!matchesPrice) {
        return false;
      }
    }

    // if (filters.priceMin !== undefined && filters.priceMax !== undefined) {
    //   return record.price >= filters.priceMin && record.price <= filters.priceMax;
    // }
    // // Availability filter
    // if (filters.availability) {
    //   // return record.stylistAvailabilities?.some(time => 
    //   //   // Logic to match availability with the filter criteria
    //   // );
    // }
    return true; // If no specific filter is applied, include the record
  }
);


const SalonCard = ({ record }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleProfileClick = () => {
    // Redirect to the stylist's profile page
    navigate(`/stylist/${record._id}`);
  };

  const handleBookingClick = () => {
    // Redirect to the booking page for the stylist
    navigate(`/stylist/${record._id}/book`);
  };

  const offeredStyles = Array.isArray(record.stylistHairstylesOffered)
    ? record.stylistHairstylesOffered
    : [];

  
  return (
  <div className="bg-white-100 p-4 rounded-xl shadow-md flex items-center mb-6 border-2 border-gray-100 hover:bg-gray-100 transition ease-in-out duration-300">
    <div className="w-1/3">
      {/* Replace with actual image URL if available */}
      <img src={'https://www.salonsdirect.com/blog/wp-content/uploads/2020/11/A-Guide-to-Going-Freelance-as-a-Hairdresser-Slice.jpg'} className="rounded-lg object-cover" alt={record.name} />
    </div>
    <div className="ml-4 w-2/3">
      <h3 onClick={handleProfileClick} className="font-semibold text-xl text-gray-800 hover:cursor-pointer">{record.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{record.personalStatement || 'No personal statement provided'}</p>
      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Hairstyles Offered:</span>
          {/* <span className="font-medium">{record.stylistHairstylesOffered.name || 'N/A'}</span> */}
          {offeredStyles.length > 0 ? (
              <ul className="mt-2 space-y-1">
                {offeredStyles.map((style, index) => (
                  <li key={index}>{style.name}</li>
                ))}
              </ul>
            ) : (
              <p>N/A</p>
            )}
          </div>
        <div className="flex justify-between">
          <span>Experience:</span>
          <span className="font-medium">{record.yearsExperience ? `${record.yearsExperience} years` : 'N/A'}</span>
        </div>
      </div>
      {/* Edit and Delete buttons */}
      <div className="flex gap-4 mt-4">
        {/* <Link
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          to={`/edit/${record._id}`}
        >
          Edit
        </Link>
        <button
          className="text-red-600 hover:text-red-800 font-medium text-sm"
          type="button"
          onClick={() => deleteRecord(record._id)}
        >
          Delete
        </button> */}
      </div>
    </div>
  </div>
  );
};


  // This method will map out the records on the table
  function recordList() {
    const stylistRecords = filteredRecords.filter((record) => record.level === "Stylist");
    return stylistRecords.map((record) => (
      <SalonCard
        record={record}
        key={record._id}
      />
    ));
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-white w-1/3 px-2 overflow-y-auto ">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Logo placeholder */}
          {/* <img src="logo.png" alt="Logo" className="w-10 h-10"/> */}
        </div>
        {/* Search Bar */}
        <div className="relative mb-2 filter drop-shadow-md">
          <input
            type="text"
            className="mt-2 w-full p-3 pl-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none flex items-center"
            placeholder="Search for stylists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* Filter Buttons */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['distance', 'price', 'reviews', 'availability'].map(filter => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`p-2 px-4 ${filters[filter] ? "bg-pink-500 text-white" : "bg-gray-200"} border-2 border-gray-300 rounded-full text-sm transition ease-linear hover:bg-pink-700 hover:text-white`}
              // p-2 px-4 bg-gray-200 border-2 border-gray-300 rounded-full text-sm filter drop-shadow-md hover:bg-pink-500 hover:text-white transition
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div> */}
        {/* <div className="space-y-4 mb-6"> */}
        <div className="flex mb-2 justify-center">
        <div className="relative w-full max-w-md justify-center">
      <button
        onClick={toggleDropdown}
        className="p-2 px-4 bg-gray-100 border-2 border-gray-300 rounded-full text-base filter drop-shadow-md hover:bg-pink-500 hover:text-white transition transition-all w-full duration-300 ease-in-out w-full text-left flex items-center justify-center"
      >
        Filters
        <span
          className={`ml-2 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md p-4 space-y-4 z-10">
          {/* Distance Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Distance (mi)</label>
            <input
              type="range"
              min="0"
              max="20"
              value={filters.distance || 0}
              onChange={(e) => setFilters({ ...filters, distance: e.target.value })}
              className="w-full"
            />
            <span>{filters.distance} miles</span>
          </div>

          {/* Styles Offered Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2 text-gray-700">Search Styles Offered</label>
            <input
              type="text"
              placeholder="e.g., Bob, Braids"
              value={filters.styleName || ''}
              onChange={(e) => setFilters({ ...filters, styleName: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>

          {/* Price Range Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2 text-gray-700">Price Range</label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min"
                value={filters.priceMin || ''}
                onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                className="p-2 border border-gray-300 rounded-lg w-1/2"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.priceMax || ''}
                onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                className="p-2 border border-gray-300 rounded-lg w-1/2"
              />
            </div>
          </div>

          {/* Available Times Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2 text-gray-700">Available Times</label>
            <input
              type="datetime-local"
              value={filters.availability || ''}
              onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>

          {/* Apply/Reset Filters (Optional) */}
          <div className="flex justify-between">
            <button
              onClick={() => setFilters({ 
                distance: null, 
                styleName: "", 
                priceMin: null, 
                priceMax: null, 
                availability: null })}
              className="p-2 px-4 bg-gray-300 rounded-lg text-sm hover:bg-gray-400 transition"
            >
              Reset
            </button>
            <button
              onClick={toggleDropdown}
              className="p-2 px-4 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>

        {/* Salon Listings */}
        <div className="space-y-6">
          {recordList()}
        </div>
      </aside>
      {/* Map Section */}
      <div className="w-2/3 relative rounded-lg overflow-hidden ml-2 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128590.6922695734!2d-86.7844437!3d36.1744653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864665c6ec7e091%3A0x7416f4bb708c4034!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sen!2sus!4v1697980411601" // Replace with your map embed link
          width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
        </iframe>
      </div>
    </div>
  );
}
