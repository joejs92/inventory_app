import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import MyModal from './MyModal.jsx'

//You may need to take the fetch function out of App, and use the result as
//the default APIText state. Will have to change useEffect below.
function App() {
  const [openModal, setOpenModal] = useState(false);

  function openModalFunction(){
    setOpenModal(true);
  }

  function closeModalFunction(){
    setOpenModal(false);
  }

  return (
    <div className='page'>
      <Header/>
      <Content modalFunction = {openModalFunction}/>
      <Footer/>
      {openModal && <MyModal closeModal={closeModalFunction}/>}
    </div>
  )
}

export default App
