import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap';
import './header.styles.scss'
import {ReactComponent as Vaccine} from '../../assets/covid-vaccince.svg';
import { Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getuser } from '../../redux/Users/user.action';

const Header = () => {
    const usersNo = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getuser())
    },[])
    return (
        <div className='header-container'>
            <div className='header-title'>
                <h1>Covid dashboard</h1> 
                <Link to='/signIn'>
                    <button to='/signIN' className = 'signbtn'>Admin signIn</button>
                </Link>
            </div>
            
            <div className='header-content'>
                <Vaccine className='logo'/>
                <div>
                    <h3>Vaccine are available in your nearest centers book your slot fast</h3>
                    <span>Register for vaccine today</span>
                   <h1>No of Users Registered : {usersNo.length}</h1> 
                
                </div>
                <Link to='/register'  >
                    <Button className ='btn'>Register for vaccine</Button>
                </Link>
            </div>
        </div>
        
    )
}

export default Header
