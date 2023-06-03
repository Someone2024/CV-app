import React, { useState } from "react";
import "./css/Experience.css"

function Expirience({ first, second, third, fourth }) {
  const [Edit, setEdit] = useState(false);
  const [SubmitState, setSubmitState] = useState(false);

  const initialContact = { first: "", second: "", third: "", fourth: "" };
  const [contact, setContact] = useState(initialContact);

  const handleChangeFor = (propertyName) => (event) => {
    setContact((contact) => ({
      ...contact,
      [propertyName]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    setSubmitState(true);
  };

  return (
    <div>
      {Edit ? (
        <div className="experience">
          {SubmitState ? (
            <div className="texts">
              <p>
                <span>{first}: </span> {contact.first}
              </p>
              <p>
                <span>{second}: </span> {contact.second}
              </p>
              <p>
                <span>{third}: </span> {contact.third}
              </p>
              <p>
                <span>{fourth}: </span> {contact.fourth}
              </p>
              <button className="add" onClick={() => setSubmitState(false)}>Add</button>
            </div>
          ) : (
            <div className="inputs">
              <p>
                {first}: <input onChange={handleChangeFor("first")} value={contact.first}/>
              </p>
              <p>
                {second}: <input onChange={handleChangeFor("second")} value={contact.second} />
              </p>
              <p>
                {third}: <input onChange={handleChangeFor("third")} value={contact.third} />
              </p>
              <p>
                {fourth}: <input onChange={handleChangeFor("fourth")} value={contact.fourth}/>
              </p>
              <button className="add" onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </div>
      ) : (
        <button className="add" onClick={() => setEdit(true)}>Add</button>
      )}
    </div>
  );
}

export default Expirience;
