import React from "react";
import "./sign-in-and-sign-up-page.styles.scss";
import SignIn from "../../components/sign-in/sign-in.componentt";
import SignUp from "../../components/sign-up/sign-up-component";
const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        {/* <h1>Account Management</h1> */}
        <SignIn />
        <SignUp />
    </div>
)
export default SignInAndSignUpPage;