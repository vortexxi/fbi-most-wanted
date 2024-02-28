import React, { useState, useEffect } from 'react';

const FetchData = ({items}) => {
  // State to store the fetched data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        // Make the AJAX call using fetch
        const response = await fetch('https://api.fbi.gov/wanted/v1/list');
        
        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON data from the response
        const result = await response.json();

        // Update the state with the fetched data
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // Empty dependency array means this effect will run once when the component mounts

  // Render the component with the fetched data
  return (
    <div>
      <h1>My Component</h1>
      {items ? (
        <ul>
          {items.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchData;
