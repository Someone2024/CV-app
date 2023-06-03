import React, { useState } from "react";

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
    setSubmitState(true)
  }

  return (
    <div>
      {Edit ? (
        <>
          <span>
            {SubmitState ? (
              <div>
                <p>
                  {first}: {contact.first}
                </p>
                <p>
                  {second}: {contact.second}
                </p>
                <p>
                  {third}: {contact.third}
                </p>
                <p>
                  {fourth}: {contact.fourth}
                </p>
                <button onClick={() => setSubmitState(false)}>Add</button>
              </div>
            ) : (
              <div>
                <span>{first}</span>{" "}
                <input
                  onChange={handleChangeFor("first")}
                  value={contact.first}
                />
                <span>{second}</span>{" "}
                <input
                  onChange={handleChangeFor("second")}
                  value={contact.second}
                />
                <span>{third}</span>{" "}
                <input
                  onChange={handleChangeFor("third")}
                  value={contact.third}
                />
                <span>{fourth}</span>
                <input
                  onChange={handleChangeFor("fourth")}
                  value={contact.fourth}
                />
                <button onClick={handleSubmit}>Submit</button>
              </div>
            )}
          </span>
        </>
      ) : (
        <button onClick={() => setEdit(true)}>Add</button>
      )}
    </div>
  );
}

export default Expirience;
