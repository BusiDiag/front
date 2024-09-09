import React, { useState } from "react";
import { useParams } from "react-router-dom";
import questionsData from "../constants/Questions.json"; // Adjust the path based on your folder structure

export default function DiagnosisForm() {
  const { id } = useParams();
  const [responses, setResponses] = useState({});

  // Extract questions from the imported JSON data
  const questions = questionsData.questions;

  const handleScoreChange = (questionIndex, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionIndex]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Responses: ${JSON.stringify(responses)}`);
  };

  return (
    <div className='DiagnosisForm'>
      <section className='main-section'>
        <div className='main-container-blue-rounded'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap-32'>
              <div className='w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0'>
                <h1 className='text-title'>Diagnosis for: {id}</h1>
                <p className='text-detail'>
                  Please rate the following aspects on a scale from 1 to 5:
                </p>
                <form onSubmit={handleSubmit} className='mt-8'>
                  {questions.map((question, index) => (
                    <fieldset key={index} className='space-y-4 mb-8'>
                      <legend className='text-content'>
                        {index + 1}. {question}
                      </legend>
                      <div className='flex flex-row items-center lg:items-start'>
                        {[1, 2, 3, 4, 5].map((value) => (
                          <label
                            key={value}
                            className='flex items-center mr-10'
                          >
                            <input
                              type='radio'
                              name={`question-${index}`}
                              value={value}
                              checked={responses[index] === value.toString()}
                              onChange={() =>
                                handleScoreChange(index, value.toString())
                              }
                              className='mr-2'
                            />
                            {value}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  ))}
                  <button type='submit' className='btn'>
                    Submit
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
