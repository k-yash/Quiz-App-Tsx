import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";

export type SignupState = {
    name: string
    email: string;
    password: string
}



// const verifyPassword = () => {
    
// }

const Signup = () => {

    const [inputError, setInputError] = useState<SignupState>({
        name:"",
        email:"",
        password:""
    })
    const [signupState, setSignupState] = useState<SignupState>({
        name:"",
        email:"",
        password:""
    });

    const verifyPassword = ():boolean => {
        const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
        return passwordRegex.test(signupState.password);
       }

    const verifyEmail = ():boolean=>{
        const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        return emailRegex.test(signupState.email);
    }   

    const validateInput = () => {
        setInputError({
            name:"",
            email:"",
            password:""
        });
        
        if(!signupState.password || !verifyPassword()){
            setInputError((prev)=>({...prev, password:"Enter a valid password"}));
        }

        if(!signupState.email || !verifyEmail()){
            setInputError((prev)=>({...prev, email:"Enter a valid email"}));
        }

        if(!signupState.name){
            setInputError((prev)=>({...prev, name:"Enter a valid name"}));
        }

    }


    const inputEvent = (event: React.ChangeEvent<HTMLInputElement>):void =>{
        const {value, name} = event.target;
        setSignupState((prev)=>({...prev, [name]: value }));
    }
    console.log(inputError);

    return (
        <>
        <h1>Signup</h1>
        <Form onSubmit={(e: React.SyntheticEvent) => {e.preventDefault();}}>
            <Form.Control onChange={inputEvent} type="text" placeholder="Enter Name" name="name" />
            <span>{inputError.name}</span>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={inputEvent} type="email" placeholder="Enter email" name="email"/>
                <span>{inputError.email}</span>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={inputEvent} type="password" placeholder="Password" name="password" />
                <span>{inputError.password}</span>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={()=>validateInput()}>
                Submit
            </Button>
        </Form>
        </>
    )
}

export default Signup
