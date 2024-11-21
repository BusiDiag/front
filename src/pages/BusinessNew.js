import React from "react";
import createBusiness from "../api/CreateBusiness";

export default function BusinessNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = createBusiness(data);

    console.log("Sent: ", data);
    console.log("Received: ", response);
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
                <form className='flex flex-col items-center w-full'>
                  <input
                    className='input-text w-full mb-4'
                    type='text'
                    placeholder='Business Name'
                  />
                  <input
                    className='input-text w-full mb-4'
                    type='text'
                    placeholder='Description'
                  />
                  <input
                    className='btn'
                    type='submit'
                    onSubmit={handleSubmit}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
