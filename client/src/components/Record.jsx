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
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined; // if simply updating a record, use; if not, undefined
      if(!id) return; // if not id, return
      const response = await fetch(
        `http://localhost:5050/record/${params.id.toString()}` // get data for existing record
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

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

// This function will handle the submission.
async function onSubmit(e) {
    e.preventDefault(); // don't reload page
    const person = { ...form };
    try {
      // if the id is present, we will set the URL to /record/:id, otherwise we will set the URL to /record.
      const response = await fetch(`http://localhost:5050/record${params.id ? "/"+params.id : ""}`, {
        // if the id is present, we will use the PATCH method, otherwise we will use the POST method.
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
        yearsExperience: "",}); // empty form
      navigate("/"); // go back to root directory
    }
  }

  // This following section will display the form that takes the input from the user.
  return (
    <>
      <h3 className="text-lg font-semibold p-4">Create/Update User Profile</h3>
      <form
        onSubmit={onSubmit}
        className="border rounded-lg overflow-hidden p-4"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
          <div>
            <h2 className="text-base font-semibold leading-7 text-slate-900">
              User Info
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              This information will be displayed to your stylist/client, so be careful what you share.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 ">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="First Last"
                    value={form.name}
                    onChange={(e) => updateForm({ name: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <div className="sm:col-span-4 mt-0">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="yourname@example.com"
                    value={form.email}
                    onChange={(e) => updateForm({ email: e.target.value })}
                  />
                </div>
              </div>
            </div>
            </div>
            <div className="sm:col-span-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-slate-900">
                      Phone Number
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        id="phoneNumber"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="(555)-555 5555"
                        value={form.phoneNumber}
                        onChange={(e) => updateForm({ phoneNumber: e.target.value })}
                      />
                    </div>
                  </div>
            <div>
              <fieldset className="mt-0">
                 <legend className="block text-sm font-medium leading-6 text-slate-900 mb-2">Position Options</legend> {/* was sr-only */}
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  <div className="flex items-center">
                    <input
                      id="positionCustomer"
                      name="positionOptions"
                      type="radio"
                      value="Customer"
                      className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-600 cursor-pointer ,"
                      checked={form.level === "Customer"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label
                      htmlFor="positionCustomer"
                      className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4"
                    >
                      Customer
                    </label>
                    <input
                      id="positionStylist"
                      name="positionOptions"
                      type="radio"
                      value="Stylist"
                      className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-600 cursor-pointer"
                      checked={form.level === "Stylist"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label
                      htmlFor="positionStylist"
                      className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4"
                    >
                      Stylist
                    </label>
                    {/* <input
                      id="positionSenior"
                      name="positionOptions"
                      type="radio"
                      value="Senior"
                      className="h-4 w-4 border-slate-300 text-slate-600 focus:ring-slate-600 cursor-pointer"
                      checked={form.level === "Senior"}
                      onChange={(e) => updateForm({ level: e.target.value })}
                    />
                    <label
                      htmlFor="positionSenior"
                      className="ml-3 block text-sm font-medium leading-6 text-slate-900 mr-4"
                    >
                      Senior
                    </label> */}
                  </div>
                </div>
              </fieldset>

              {/* Conditionally render extra fields based on the selected level */}
              {form.level === "Stylist" && (
              <div className="mt-6">
                <h4 className="text-base font-semibold leading-7 text-slate-900">Stylist Details</h4>
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 mt-4">
                  <div className="sm:col-span-4">
                  <label
                  htmlFor="personalStatement"
                  className="block text-sm font-medium leading-6 text-slate-900"
                >
                  Personal Statement
                </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="personalStatement"
                        id="personalStatement"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="e.g. 'I aim to ensure my customers never have another bad hair day!'"
                        value={form.personalStatement}
                        onChange={(e) => updateForm({ personalStatement: e.target.value })}
                    />
                  </div>
                </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="stylistHairstylesOffered" className="block text-sm font-medium leading-6 text-slate-900">
                    Hairstyles Offered
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        id="stylistHairstylesOffered"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="e.g. fades, cornrows"
                        value={form.stylistHairstylesOffered}
                        onChange={(e) => updateForm({ stylistHairstylesOffered: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="stylistCertification" className="block text-sm font-medium leading-6 text-slate-900">
                      Certifications
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        id="stylistCertification"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Certification"
                        value={form.stylistCertification}
                        onChange={(e) => updateForm({ stylistCertification: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="yearsExperience" className="block text-sm font-medium leading-6 text-slate-900">
                      Years of Experience
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        id="yearsExperience"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Years of Experience"
                        value={form.yearsExperience}
                        onChange={(e) => updateForm({ yearsExperience: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {form.level === "Customer" && (
              <div className="mt-6">
                <h4 className="text-base font-semibold leading-7 text-slate-900">Customer Preferences</h4>
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 mt-4">
                  <div className="sm:col-span-4">
                    <label htmlFor="hairType" className="block text-sm font-medium leading-6 text-slate-900">
                      Hair Type
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      {/* <input
                        type=""
                        id="hairType"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="e.g. 1A, 4C"
                        value={form.hairType}
                        onChange={(e) => updateForm({ hairType: e.target.value })}
                      /> */}
                      <select id="hairType"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="e.g. 1A, 4C"
                              value={form.hairType}
                              onChange={(e) => updateForm({ hairType: e.target.value })}>
                        <option value="">Select hair type</option>
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
                    </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="preferredService" className="block text-sm font-medium leading-6 text-slate-900">
                      Preferred Services
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        id="preferredService"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Service Type"
                        value={form.preferredService}
                        onChange={(e) => updateForm({ preferredService: e.target.value })}
                      />
                    </div>
                  </div>
                  {/* <div className="sm:col-span-4">
                    <label htmlFor="frequencyOfVisit" className="block text-sm font-medium leading-6 text-slate-900">
                      Frequency of Visit
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        id="frequencyOfVisit"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Visit Frequency"
                        onChange={(e) => updateForm({ frequencyOfVisit: e.target.value })}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            )}


            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Save Profile"
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
        />
      </form>
    </>
  );
}