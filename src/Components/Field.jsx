import React, { useState } from "react";
import "./css/Field.css";

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
        <div className="Field">
            { buttonState === "Edit" ? 
                <p>{input}</p> :
                <input value={input} onChange={handleInput} type="text"/>
            }
            {
                Edit === "Update CV" && <button className="Edit" onClick={handleBtnState}>{buttonState}</button> 
            }
            
        </div>
    )
}

export default Field;