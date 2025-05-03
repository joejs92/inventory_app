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
  const [componentId, setComponentId] = useState("")

  function openModalFunction(id){
    setComponentId(id);
    setOpenModal(true);
    //console.log(componentId);
  }

  function closeModalFunction(){
    setOpenModal(false);
  }

  return (
    <div className='page'>
      <Header/>
      <Content modalFunction = {openModalFunction}/>
      <Footer/>
      {openModal && <><MyModal closeModal={closeModalFunction} id = {componentId}/> <div className='overlay' onClick={()=>closeModalFunction()}></div></>}
    </div>
  )
}

export default App
