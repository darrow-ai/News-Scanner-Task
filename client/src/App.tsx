import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchHelloMessage = async () => {
      try {
        const response = await fetch("/api/hello");
        const data = await response.json();
        console.log(data.message);
      } catch (error) {
        console.error("Error fetching the hello message:", error);
      }
    };

    fetchHelloMessage();
  }, []);

  
  return (
    <div className="App">
      <main>News Room</main>
    </div>
  );
}

export default App;
