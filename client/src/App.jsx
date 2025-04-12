import { useState, useEffect } from 'react'
import './App.css'
import Button from './button.jsx'
import Content from './Content.jsx'
import axios from "axios";

function App() {
  const [APIText, setAPIText] = useState([]);
  /* //"http://localhost:3000/?category="
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/");
    setAPIText(response.data);
    console.log(response);
  };
  //below function calls fetchAPI at page initialization.
  useEffect(()=>{
    fetchAPI();
  },[]); */

  function buttonTest(){
    window.alert("Clap");
  }

  return (
    <>
      <Button text = "Please Clap" handleClick={buttonTest}></Button>
      <Content/>
    </>
  )
}

export default App
