import React from 'react'
import './signin.styles.scss'
import {useForm } from 'react-hook-form';
import { auth } from '../../firebase/firebase';
import  { useHistory} from "react-router-dom";


const SignIn = () => {
    const {register , handleSubmit} = useForm();
    let history = useHistory()

    const onsubmit = (data, event) => {
        const {email, password} = data
        // sign in for admin
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('user signed in with emain and password')
            if(user)  history.push('/userstable') 
        })
        .catch((error) => {
            console.log(error)
          
        });

        event.target.reset()
    }
    return (
        <form onSubmit = {handleSubmit(onsubmit)} className='signin-form'>
            <h3>Sign In page only for admins</h3>
            <div className='group-form'>
                <label>
                    EmailId 
                </label>
                <input 
                    type='mail'
                    placeholder = 'email'
                    name = 'email'
                    {...register('email', {required : true})}
                />
           </div>
            
            
            <div className='group-form'>
                <label>
                Password 
                </label>
                <input 
                    type='password'
                    placeholder = 'password'
                    name = 'password'
                    {...register('password', {required : true})}
                />
            </div>
            <input type='submit' value='Login'/>
            
            
        </form>
    )
}

export default SignIn
