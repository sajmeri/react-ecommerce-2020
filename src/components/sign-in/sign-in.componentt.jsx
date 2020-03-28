import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () =>{
   const [userCredentials, setUserCredentials ] =  useState({email: '',  password: ''});
   const {email, password} = userCredentials;
    const handleChange = event => {
        const {name, value} = event.target;    
        setUserCredentials({[name]: value});
    }

    const handleSubmit = async event => {
        event.preventDefault();        
        try{
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({email:'', password:''});
        }catch(error){
            console.log(error);
        }
        
    }
   
    return (
        <div className="sign-in-form">
            <p>I already have an acount!</p>
            <p>Enter your email and password to Sign in.</p>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email" 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={handleChange} />
                
                <FormInput 
                    label="Password" 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={handleChange} />
                
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleButton>Sign in with Google</CustomButton>
            </form>
        </div>

    )
    
}

export default SignIn;