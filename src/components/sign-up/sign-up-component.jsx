import React, {useState} from "react";
import "./sign-up-styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = ()=>{
    const [userCredentials, setUserCredentials] = useState({displayName: '', email: '', password: '', confirmPassword: ''});
    const {displayName, email, password, confirmPassword} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();        
        if(password!==confirmPassword){
            alert("Passwords don't match");
            return;
        }
        const {user} = await auth.createUserWithEmailAndPassword(email, password);

        try{
            await createUserProfileDocument(user, {displayName});
            setUserCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.log(error);
        }
        
    }

    const handleChange = event =>{
        const {name, value} = event.target;        
        setUserCredentials({...userCredentials, [name] : value})
    }   
        
    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account.</h2>
            <span>Sign up using your email and password</span>
            <form className="signUpForm" onSubmit={handleSubmit}>
            <FormInput 
                    label="displayName"
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput 
                        label="email"
                        type="email"
                        name="email"
                        value={email}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput 
                        label="password"
                        type="password"
                        name="password"
                        value={password}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput 
                        label="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={handleChange}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
        </div>
    )
    
}
export default SignUp;
