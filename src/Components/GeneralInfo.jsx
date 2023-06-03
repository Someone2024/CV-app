import React from "react";
import Field from "./Field";
import "./css/GeneralInfo.css"

function GeneralInfo({Edit}) {
    return(
        <div className="General-Info">
            <Field Edit={Edit} initialText="First Name"/>
            <Field Edit={Edit} initialText="Last Name"/>
            <Field Edit={Edit} initialText="Email"/>
            <Field Edit={Edit} initialText="Phone Number"/>
        </div>
    )
}

export default GeneralInfo;