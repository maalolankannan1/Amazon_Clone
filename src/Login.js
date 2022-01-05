import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
// import { auth } from './firebase';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (event) => {
        const val = event.target.value;
        setEmail(val);
    }

    const passwordHandler = (event) => {
        const val = event.target.value;
        setPassword(val);
    }

    const signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user.user);
                if(user) {
                    history.push('/');
                }
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log(auth);
                if(auth) {
                    history.push('/');
                }
            })
            .catch((err) => {
                alert(err.message);
            })
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG1.png' />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form action="">
                    <h5>Email:</h5>
                    <input type="text" value={email} onChange={emailHandler} />

                    <h5>Password:</h5>
                    <input type="password" value={password} onChange={passwordHandler} />

                    <button type="submit" onClick={signin} className='login__siginButton'>Sign-in</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button type="submit" onClick={register} className='login__registerButton'>Create New Account</button>
            </div>
        </div>
    )
}

export default Login
