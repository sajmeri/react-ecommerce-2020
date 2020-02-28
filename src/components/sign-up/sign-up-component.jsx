import React, {Component} from "react";
import "./sign-up-styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert("Passwords don't match");
            return;
        }
        const {user} = await auth.createUserWithEmailAndPassword(email, password);

        try{
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.log(error);
        }
        
    }

    handleChange = event =>{
        const {name, value} = event.target;
        
        this.setState({
            [name] : value
        })
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account.</h2>
                <span>Sign up using your email and password</span>
                <form className="signUpForm" onSubmit={this.handleSubmit}>
                <FormInput 
                        label="displayName"
                            type="text"
                            name="displayName"
                            value={displayName}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput 
                            label="email"
                            type="email"
                            name="email"
                            value={email}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput 
                            label="passwork"
                            type="password"
                            name="password"
                            value={password}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput 
                            label="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            handleChange={this.handleChange}
                            required
                        />
                        <CustomButton type="submit">SIGN UP</CustomButton>
                    </form>
            </div>
        )
    }
}
export default SignIn;
