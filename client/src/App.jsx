import { useState, useEffect } from 'react'
import './App.css'
import Button from './button.jsx'
import Content from './Content.jsx'
import CategoryBox from './CategoryBox.jsx'
import axios from "axios";
//You may need to take the fetch function out of App, and use the result as
//the default APIText state. Will have to change useEffect below.
function App() {
  return (
    <>
      <Content/>
    </>
  )
}

export default App
