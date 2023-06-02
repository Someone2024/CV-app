import React, { useState } from "react";


function Field() {
    const [input, setInput] = useState("First Name")
    const [buttonState, setButtonState] = useState("Edit");

    const handleInput = e => {
        setInput(e.target.value);
    }

    const handleBtnState = e => {
        if(buttonState === "Edit") setButtonState("save");
        else setButtonState("Edit");
    }

    return (
        <>
            { buttonState === "Edit" ? 
                <p>{input}</p> :
                <input value={input} onChange={handleInput} type="text"/>
            }
            <button onClick={handleBtnState}>{buttonState}</button>
        </>
    )
}

export default Field;