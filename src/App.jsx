import { useContext, useState } from 'react'
import React from 'react';
import { ReactDOM } from 'react-dom/client';
import './App.css'
import { MyContext } from './Healper/Context';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [username, setUsername] = useState(" ")
   const user = useContext(MyContext)
   const notify = ()=>{
    toast.success('Login Sucessfuly', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
   }
  
  

  return (
    <>
     {user} 
    <h1>my name is:{username}</h1>
      <form >
        <input type='text' 
        className=''
        placeholder='enter name'
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)}} />
      </form>
      <button id='btn' onClick={notify}>Login</button>
      <ToastContainer/>
    </>
  )
}


export default App
