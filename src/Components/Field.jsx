import React, { useState } from "react";


function Field({initialText, Edit}) {
    const [input, setInput] = useState(initialText)
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
            {
                Edit === "Update CV" && <button onClick={handleBtnState}>{buttonState}</button> 
            }
            
        </>
    )
}

export default Field;