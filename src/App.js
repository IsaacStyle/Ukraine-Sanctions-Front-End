import './App.css'
import { useState,useEffect } from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import Routez from './Components/Routes.jsx'
import Home from './Components/Home.jsx'
import NAV from './Components/NAV.jsx'
import Persons from './Components/Persons.jsx'
import Companies from './Components/Companies.jsx'

function App() {

  return (
    <>
    <NAV />
    <h1 className='pholder'>PlaceHolder</h1>
    <Routez />
    </>
  )
}

export default App;
