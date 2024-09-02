"use client";  // Ensures this is a Client Component

import axios from 'axios';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);  // Track if the first button was clicked

  useEffect(() => {
    // Fetch data from Django API on component mount
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/example/');
        setData(res.data);
      } catch (error) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    try {
      // Sending the input value to the Django backend
      const response = await axios.post('http://localhost:8000/api/submit/', {
        input_value: inputValue,
      });

      console.log('Response from Django:', response.data);
      setIsSubmitted(true);  // Set this to true after submission
    } catch (error) {
      setError('Failed to submit data');
      console.error('Error submitting data:', error);
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center">
        {!isSubmitted && (
      <div className="w-1/4 rounded-xl border-2 p-5 border-black">
        {error && <p className="text-red-500">{error}</p>}
        {data && <h1>{data.message}</h1>}
        <h1>Код авах хэсэг</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="code"
              placeholder="цахим хаягаа оруулна уу?"
              className="border-2 w-full p-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="border-2 bg-green p-2 mt-4">
              код авах
            </button>
          </form>
        
      </div>
)}
      {isSubmitted && (
        <div className="w-1/4 rounded-xl border-2 p-5 border-black">
          {error && <p className="text-red-500">{error}</p>}
          {data && <h1>{data.message}</h1>}
          <h1>Код оруулах хэсэг</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="code"
              placeholder="кодоо оруулна уу?"
              className="border-2 w-full p-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="border-2 bg-green p-2 mt-4">
              Баталгаажуулах
            </button>
          </form>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
