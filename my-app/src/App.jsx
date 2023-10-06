import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Middle from './Components/Middle';
import Navbar from './Components/Navbar';

function App() {
  // State to manage the loading statusls
  
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay to fetch the data (you can replace this with your actual data fetching logic)
  useEffect(() => {
    // Simulate a delay of 5 seconds (replace this with your actual data fetching)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false when data is ready
    }, 2000);
  }, []);

  return (
    <div className="App">
      {/* Conditionally render the loading indicator */}
      {isLoading ? (
       <img className="loading" src="https://ntwist.com/wp-content/uploads/2022/03/cropped-favicon-32x32.png" alt="" />
        ) : (
          <>
          <Navbar />
          <Middle />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
