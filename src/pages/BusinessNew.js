import React, { useState } from "react";
import createBusiness from "../api/CreateBusiness";

export default function BusinessNew() {
  const [formData, setFormData] = useState({
    ownerId: "1",
    name: "",
    description: "",
    type: "",
    size: "",
    status: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Sent: ", formData);

    try {
      const response = await createBusiness(formData);
      if (response && response.status === 201) {
        const responseData = await response.data;
        console.log("Received: ", responseData);
      } else {
        console.error("Error TRY: ", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setFormData({
      ownerId: "1",
      name: "",
      description: "",
      type: "",
      size: "",
      status: "",
      date: "",
    });

    window.location.href = "/businesses";
  };

  return (
    <div className='BusinessNew w-full'>
      <section className='main-section'>
        <div className='main-container-blue-rounded'>
          <div className='w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full flex flex-col gap-8 items-center'>
              <div className='w-full text-center lg:text-left'>
                <h1 className='text-title'>New Business</h1>
                <p className='text-detail'>Create a new business</p>
              </div>
              <div className='w-full lg:w-2/3 xl:w-1/2 mx-auto'>
                <form
                  className='flex flex-col items-center w-full'
                  onSubmit={handleSubmit}
                >
                  <input
                    className='input-text w-full mb-4'
                    type='text'
                    name='name'
                    placeholder='Business Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className='input-text w-full mb-4'
                    type='text'
                    name='description'
                    placeholder='Description'
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                  <select
                    className='input-text w-full mb-4'
                    name='type'
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select a type</option>
                    <option value='PUBLIC'>Public</option>
                    <option value='PRIVATE'>Private</option>
                  </select>
                  <input
                    className='input-text w-full mb-4'
                    type='text'
                    name='size'
                    placeholder='Size (Optional)'
                    value={formData.size}
                    onChange={handleChange}
                  />
                  <select
                    className='input-text w-full mb-4'
                    name='status'
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select the status</option>
                    <option value='ACTIVE'>Active</option>
                    <option value='INACTIVE'>Inactive</option>
                  </select>
                  <input
                    className='input-text w-full mb-4'
                    type='date'
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <button type='submit' className='btn'>
                    Create Business
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
