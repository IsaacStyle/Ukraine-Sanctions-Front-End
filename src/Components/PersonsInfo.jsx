import { getPerson } from "../Services/persons.js";
import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PersonsInfo() {
    const params = useParams()
    const [person,setPerson] = useState({})
    
    useEffect(() => {
      fetchPerson();     
    }, []);
    
    async function fetchPerson() {
      const oneGuy = await getPerson(params.id);
      setPerson(oneGuy);
      
    }

  return (
    <>
    <div>
        {person.name_en && 
            <div className='personsInfo'>
            <div className='imgBox'>
            <img
              src={person.photo}
              alt={person.name_en}
              className="personsImgsInfo"
            ></img>
            <h3 >Country Of Birth</h3>
            <p className='dob'>{person.cob} in {person.dob}</p>
            </div>
            <h1 className='personName'>{person.name_en}</h1>
            <p className='personPosition'>{person.position}</p>
            <h3>Reasoning For Sanctions</h3>
            <p className='personReasoning'>{person.reasoning}</p>
            <p className='dob'><span className='dates'>Dates: </span>US Date: {person.sanctions_us_date} | UA Date: {person.sanctions_ua_date} | AU Date: {person.sanctions_au_date}</p>
            </div>
            || <h1 className='load'>Loading. . .</h1>}
    </div>
    </>
  )
}
