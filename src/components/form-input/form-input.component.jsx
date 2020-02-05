import React from "react";
import "./form-input.styles.scss";

const FormInput = ({handleChange, label, ...otherInputProperties}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherInputProperties} />
        {label ? 
            <label className={ ` ${otherInputProperties.value.length ? 
                'shrink' : '' }
                form-input-label`}> {label} </label> 
        : ""}
    </div>
)
export default FormInput;