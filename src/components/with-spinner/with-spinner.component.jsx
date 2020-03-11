import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {    
    console.log("With spiner");
    const spinner = ({ isLoading, ...otherProperties }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
        :( <WrappedComponent {...otherProperties} />)
    }
    return spinner;
}

export default WithSpinner;