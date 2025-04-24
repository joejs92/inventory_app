import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Content from './Content.jsx'
//You may need to take the fetch function out of App, and use the result as
//the default APIText state. Will have to change useEffect below.
function App() {
  return (
    <div className='page'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
