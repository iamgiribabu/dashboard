import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { getuser } from '../../redux/Users/user.action';
import './table.styles.scss'
import { useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { auth } from '../../firebase/firebase';
import  { useHistory} from "react-router-dom";

const Fetchtable = () => {
    const users = useSelector(state => state.users.users)
    // const data = useSelector(state => state)
    let history = useHistory()
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getuser())
     },[])
 
    return(
        <div>
            <div>
                <button 
                    onClick={() => {
                        auth.signOut()
                        history.push('/')
                    }}
                >
                    Logout
                </button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr className='table-head'>
                        <th>Name</th>
                        <th>Contact number</th>
                        <th>Adhaar number</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Date of registeration</th>
                        <th>vaccine status</th>
                        <th>update status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map(({name, contactNo, adhaarNo, age, gender, date, status}, index )=> (
                        <tr key={index} >
                            <td>{name}</td>
                            <td>{contactNo}</td>
                            <td>{adhaarNo}</td>
                            <td>{age}</td>
                            <td>{gender}</td>
                            <td>{date}</td>
                            <td>{status}</td>
                            <td><EditIcon/></td>
                
                        </tr>  
                        
                    ))
                }
                </tbody>
                    
                
                
            </Table>
        </div>
    )
}


export default Fetchtable
