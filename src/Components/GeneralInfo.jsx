import React from "react";
import Field from "./Field";

function GeneralInfo({Edit}) {
    return(
        <div>
            <Field Edit={Edit} initialText="First Name"/>
            <Field Edit={Edit} initialText="Last Name"/>
            <Field Edit={Edit} initialText="Email"/>
            <Field Edit={Edit} initialText="Phone Number"/>
        </div>
    )
}

export default GeneralInfo;