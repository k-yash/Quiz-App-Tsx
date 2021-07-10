import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap";

export type LoginState = {
    email: string;
    password: string
}

const Login = () => {

    const [inputError, setInputError] = useState<LoginState>({
        email:"",
        password:""
    })
    const [loginState, setLoginState] = useState<LoginState>({
        email:"",
        password:""
    });

    const validateInput = () => {
        setInputError({
            email:"",
            password:""
        });
        if(!loginState.password){
            setInputError((prev)=>({...prev, password:"Enter a valid password"}))
        }

        if(!loginState.email){
            setInputError((prev)=>({...prev, email:"Enter a valid email"}));
        }

    }


    const inputEvent = (event: React.ChangeEvent<HTMLInputElement>):void =>{
        const {value, name} = event.target;
        setLoginState((prev)=>({...prev, [name]: value }));
    }
    
    return (
        <>
        <h1>Login</h1>
            <Form onSubmit={(e: React.SyntheticEvent) => {e.preventDefault();}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={inputEvent} type="email" placeholder="Enter email" name="email" />
                    <span>{inputError.email}</span>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={inputEvent} type="password" placeholder="Password" name="password"  />
                    <span>{inputError.password}</span>
                </Form.Group>
                <Button onClick={()=>{validateInput()}} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </>
    )
}

export default Login
