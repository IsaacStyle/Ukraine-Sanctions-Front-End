import { getPerson, deletePerson } from "../Services/persons.js";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function PersonsInfo() {
  const params = useParams();
  let navigate = useNavigate();
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetchPerson();
  }, [params.id]);

  async function fetchPerson() {
    const oneGuy = await getPerson(params.id);
    setPerson(oneGuy);
  }

  const clickDelete = async () => {
    await deletePerson(params.id);
    navigate(`/persons/`, { replace: true });
  };

  return (
    <>
      <div>
        {person.name_en && (
          <>
            <div className="personsInfo">
              <div className="imgBox">
                <img
                  src={person.photo}
                  alt={person.name_en}
                  className="personsImgsInfo"
                ></img>
                <h3>Country Of Birth</h3>
                <p className="dob">
                  {person.cob} in {person.dob}
                </p>
              </div>
              <h1 className="personName">{person.name_en}</h1>
              <p className="personPosition">{person.position}</p>
              <h3>Reasoning For Sanctions</h3>
              <p className="personReasoning">{person.reasoning}</p>
              <p className="dob">
                <span className="dates">Dates: </span>US Date:{" "}
                {person.sanctions_us_date} | UA Date: {person.sanctions_ua_date}{" "}
                | AU Date: {person.sanctions_au_date}
              </p>
            </div>
            <div className="buttons">
              <Link to={`/persons/${params.id}/edit`}>
                <button className="button">Edit</button>
              </Link>
              <Link to="/persons">
                <button className="button">Back</button>
              </Link>
              <Link to={`/persons/${params.id}`}>
                <button className="button" onClick={clickDelete}>
                  Delete
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
