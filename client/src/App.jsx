import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [APIText, setAPIText] = useState("");

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/");
    setAPIText(response.data);
    console.log(response);
  };
  //below function calls fetchAPI at page initialization.
  useEffect(()=>{
    fetchAPI();
  },[]);

  return (
    <>
      <p>
        {APIText}
      </p>
    </>
  )
}

export default App
