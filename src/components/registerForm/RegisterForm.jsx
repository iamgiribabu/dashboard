import React from 'react'
import {useForm } from 'react-hook-form';
import './registerForm.styles.scss'
import  { useHistory} from "react-router-dom";
import{ firestore }from '../../firebase/firebase'

const RegisterForm = () => {
    let history = useHistory()
    const {register , handleSubmit, formState: { errors }} = useForm();
    const ref = firestore.collection('registeredUser');


    // add data to database
    const addRegistrationUser = (data) =>{
        // console.log({...data, date : new Date().toDateString()})
        ref.add({...data, date : new Date().toDateString(), status : '-'});
        history.push('/')
    }

    const onSubmit = (data) =>(
        data ? addRegistrationUser(data) : null
    )

    return (
        <div className='form-container'>
            <h1>Registeration form </h1>
            <form onSubmit={handleSubmit(onSubmit)} className='form-body'>
                <input 
                    className='form-item' 
                    type='text' 
                    placeholder='your name' 
                    name='username' 
                    {...register('name', { required: true })} 
                />
                { errors.name && <p>invalid</p>}
                <input 
                    className='form-item' 
                    type='number' 
                    placeholder='mobile number' 
                    name='mob'  
                    
                    {...register('contactNo' , {required : true, maxLength:10, minLength:10})} 
                />
                { errors.contactNo && <p>Invalid contact number</p>}
                <input 
                    className='form-item' 
                    type='number' 
                    placeholder='adhaar number' 
                    name='adhaar' 
                    {...register('adhaarNo' , {required : true, maxLength:12 , minLength:12})} 
                />
                {errors.adhaarNo && <p>Invalid adhaar Number</p>}
                <input 
                    className='form-item' 
                    type='number' 
                    placeholder='age' name='age' {...register('age' , { required : true, min : 18})} 
                />
                {errors.age && <p>age should abouve 18</p>}
                
                <select className='form-item' {...register("gender")}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select>
                <input className='form-item' type='submit' />
            </form>
            
        </div>
        
    )
}

export default RegisterForm
