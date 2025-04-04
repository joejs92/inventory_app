import { useState, useEffect } from 'react'
import './App.css'
import Button from './button.jsx'
import axios from "axios";

function App() {
  const [APIText, setAPIText] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/?category=book");
    setAPIText(response.data);
    console.log(response);
  };
  //below function calls fetchAPI at page initialization.
  useEffect(()=>{
    fetchAPI();
  },[]);

  function buttonTest(){
    window.alert("Clap");
  }

  return (
    <>
      <Button text = "Please Clap" handleClick={buttonTest}></Button>
      <div>{APIText.map((item)=>{
        return (
      <div key={item.id} >
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p>{item.quantity}</p>
      </div>
      )
      })}</div>
    </>
  )
}

export default App
