import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const Record = (props) => (
//   <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//     <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
//       {props.record.name}
//     </td>
//     <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
//       {props.record.personalStatement}
//     </td>
//     {/* <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
//       {props.record.email}
//     </td> */}
//     {/* <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
//       {props.record.level}
//     </td> */}
//     <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
//       <div className="flex gap-2">
//         <Link
//           className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
//           to={`/edit/${props.record._id}`}
//         >
//           Edit
//         </Link>
//         <button
//           className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
//           color="red"
//           type="button"
//           onClick={() => {
//             props.deleteRecord(props.record._id);
//           }}
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// );

export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

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
  }, [records.length]);

  async function deleteRecord(id) {
    await fetch(`http://localhost:5050/record/${id}`, {
      method: "DELETE",
    });
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

const filteredRecords = records.filter((record) =>
  record.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  record.personalStatement?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  record.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  record.level?.toLowerCase().includes(searchQuery.toLowerCase())
);

const SalonCard = ({ record }) => (
  <div className="bg-white p-4 rounded-xl shadow-md flex items-center mb-6 border-2 border-gray-100 hover:bg-gray-50 transition">
    <div className="w-1/3">
      {/* Replace with actual image URL if available */}
      <img src={'https://www.salonsdirect.com/blog/wp-content/uploads/2020/11/A-Guide-to-Going-Freelance-as-a-Hairdresser-Slice.jpg'} className="rounded-lg object-cover" alt={record.name} />
    </div>
    <div className="ml-4 w-2/3">
      <h3 className="font-semibold text-xl text-gray-800">{record.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{record.personalStatement || 'No personal statement provided'}</p>
      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Hairstyles Offered:</span>
          <span className="font-medium">{record.stylistHairstylesOffered || 'N/A'}</span>
        </div>
        <div className="flex justify-between">
          <span>Experience:</span>
          <span className="font-medium">{record.yearsExperience ? `${record.yearsExperience} years` : 'N/A'}</span>
        </div>
      </div>
      {/* Edit and Delete buttons */}
      <div className="flex gap-4 mt-4">
        <Link
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
        </button>
      </div>
    </div>
  </div>
);


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
        <div className="relative mb-6 filter drop-shadow-md">
          <input
            type="text"
            className="mt-2 w-full p-3 pl-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none flex items-center"
            placeholder="Search for stylists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <svg
            className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
          </svg> */}
        </div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button className="p-2 px-4 bg-gray-200 border-2 border-gray-300 rounded-full text-sm filter drop-shadow-md hover:bg-pink-500 hover:text-white transition">
            Distance
          </button>
          <button className="p-2 px-4 bg-gray-200 border-2 border-gray-300 rounded-full text-sm filter drop-shadow-md hover:bg-pink-500 hover:text-white transition">
            Price
          </button>
          <button className="p-2 px-4 bg-gray-200 border-2 border-gray-300 rounded-full text-sm filter drop-shadow-md hover:bg-pink-500 hover:text-white transition">
            Reviews
          </button>
          <button className="p-2 px-4 bg-gray-200 border-2 border-gray-300 rounded-full text-sm filter drop-shadow-md hover:bg-pink-500 hover:text-white transition">
            Availability
          </button>
        </div>
        {/* Salon Listings */}
        <div className="space-y-6">
          {recordList()}
        </div>
      </aside>
      {/* Map Section */}
      <div className="w-2/3 relative rounded-lg overflow-hidden ml-2 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093704!2d144.9537353153164!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0eec5c7%3A0x5045675218ceed4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1614037668116!5m2!1sen!2sau" // Replace with your map embed link
          width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
        </iframe>
      </div>
    </div>
  );
}
