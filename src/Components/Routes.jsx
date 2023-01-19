import { Link,Route,Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Persons from './Persons.jsx'
import PersonsInfo from './PersonsInfo.jsx'
import { useState, useEffect } from 'react'
import NewPerson from './NewPerson.jsx'
import EditPerson from './EditPerson.jsx'


function Routez() {

    return(
        <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/persons`} element={
                <>
                <ul className='peopleList'>
                    <Persons />      
                </ul>
                </>
            } />
            <Route path={`/persons/:id`} element={
                        <>
                        <div className='background'>
                        <PersonsInfo /> 
                        </div>                    
                        </>} />
                        
            <Route path={`/persons/:id/edit`} element={<EditPerson />} />
            <Route path={`/new-persons`} element={<NewPerson />} />
        </Routes>
    )
}

export default Routez

{/* <div className='popup'>
<img src={digi.img} alt={digi.name} className='imgs2'></img>
<h2 className='details' id={digi.name}>Name: {digi.name} <br></br><br></br>Level: {digi.level}</h2>
<Link to={`/`} className='close'>x</Link>            
</div> */}