import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        console.log("handleChange");
        console.log(name, value);
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("form submit");
    }
    render(){
        return (
            <div className="sign-in-form">
                <p>I already have an acount!</p>
                <p>Enter your email and password to Sign in.</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label="Email" 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} />
                    
                    <FormInput 
                        label="Password" 
                        type="possword" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} />
                    
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleButton>Sign in with Google</CustomButton>
                </form>
            </div>
    
        )
    }
}

export default SignIn;