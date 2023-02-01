import React from "react";
import './entry.style.css';
import {LoginForm} from '../../components/Login/LoginForm.comp';
import {useState} from 'react';
import {PasswordReset} from '../../components/password-reset/PasswordReset.comp';

export const Entry = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [frmLoad,setFrmLoad]=useState('login');
    const handleonchange = e=>{
        const {name,value}=e.target;
        switch(name){
            case 'email':
            setEmail(value);
            break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }

    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        // if(!email || !password){
        //     //To Do the api Call
        //    return alert("Fill up the form");
        // }
        console.log(email,password);
    };
    const handleOnReset =(e)=>{
        e.preventDefault();
        if(!email){
            return alert("Please Enter the email");
        }
        console.log(email);
    };
    const formSwitcher = frmType=>{
            setFrmLoad(frmType);
    }
  return (
   
    <div className="entry-page bg-info ">
        {frmLoad==="login" &&<div className="jumbotron form-box">
           <LoginForm handleonchange={handleonchange}
           handleOnSubmit={handleOnSubmit}
           formSwitcher={formSwitcher}
            email={email}
            pass={password}
           />
        </div>
        }
        {frmLoad==="rest" &&
        <div className="jumbotron form-box">
           <PasswordReset handleonchange={handleonchange}
           handleOnSubmit={handleOnSubmit}
           formSwitcher={formSwitcher}
           handleOnReset={handleOnReset}
            email={email}
           />
        </div>
        }

    </div>
  )
}
