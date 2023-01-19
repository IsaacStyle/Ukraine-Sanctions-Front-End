import { useState } from "react";
import { createPerson } from "../Services/persons.js";
import { useNavigate } from "react-router-dom";

export default function NewPerson() {
  let navigate = useNavigate();
  const [person, setPerson] = useState({
    name_en: "",
    name_ru: "",
    person_id: 0,
    position: "",
    reasoning: "",
    photo: "",
    dob: "",
    cob: "",
    sanctions_us_date: "",
    sanctions_ua_date: "",
    sanctions_au_date: "",
    category: "",
    subcategory_1: "",
    subcategory_2: "",
    subcategory_3: "",
    sanctions_es: 1,
    sanctions_gb: 1,
    sanctions_us: 1,
    sanctions_ca: 0,
    sanctions_ch: 1,
    sanctions_au: 1,
    sanctions_jp: 1,
    sanctions_pl: 0,
    sanctions_ua: 1,
    sanctions_nz: 1,
    sanctions_es_date: "2023-01-01",
    sanctions_gb_date: "2023-01-01",
    sanctions_ca_date: null,
    sanctions_ch_date: "2022-03-04",
    sanctions_jp_date: "2022-04-12",
    sanctions_pl_date: null,
    sanctions_nz_date: "2022-10-12",
    dod: "",
    related_persons: [],
    related_companies: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await createPerson(person);
    console.log(response)
    navigate(`/persons/${response._id}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="background">
      <form className="createForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className='inputs'
          placeholder="Name | English"
          name="name_en"
          value={person.name_en}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Name | Russian"
          name="name_ru"
          value={person.name_ru}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Position"
          name="position"
          value={person.position}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Reasoning"
          name="reasoning"
          value={person.reasoning}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Photo Url"
          name="photo"
          value={person.photo}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Date Of Birth"
          name="dob"
          value={person.dob}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Location Of Birth"
          name="cob"
          value={person.cob}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="US Date"
          name="sanctions_us_date"
          value={person.sanctions_us_date}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="UA Date"
          name="sanctions_ua_date"
          value={person.sanctions_ua_date}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="AU Date"
          name="sanctions_au_date"
          value={person.sanctions_au_date}
          onChange={handleChange}
        />
        <input
          type="text"
          className='inputs'
          placeholder="Person ID"
          name="person_id"
          value={person.person_id}
          onChange={handleChange}
        />
        <button className='inputs' type="submit">Submit</button>
      </form>
    </div>
  );
}
