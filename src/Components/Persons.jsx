import { useState,useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { getPersons } from "../Services/persons.js";

function Persons(props) {
const params = useParams()
const [persons,setPersons] = useState([])

useEffect(() => {
  fetchPersons();
}, []);

async function fetchPersons() {
  const allPersons = await getPersons();
  setPersons(allPersons);
}

  return (
    
    <>       
      {persons.length && persons.slice(0,24).map((peep, idx) => (
          <li key={idx} className="peopleListItems">
            <Link to={`/persons/${peep?._id}`}>
              <img
                src={peep?.photo}
                alt={peep?.name_en}
                className="personsImgs"
              ></img>
            </Link>
          </li>
        )) || <h1 className='load'>Loading. . .</h1>}
    </>
  );
}
export default Persons;
