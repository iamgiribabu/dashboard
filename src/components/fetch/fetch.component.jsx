import React, {useEffect} from 'react'
import { fetchData } from '../../redux/fetch.action'
import {useSelector,useDispatch} from 'react-redux'
import Fetchtable from '../table/table.component'
import './fetch.styles.scss'

const FetchComponent = () => {
    const fetchresponse = useSelector(state => state)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchData())
    },[])

    return( 
        <div className='table-container'>
        {
            fetchresponse.data.message ? ( <div><p>{fetchresponse.data.message}...</p> <span>plz wait something went wrong.....</span> </div>) :  (<Fetchtable fetchresponse={fetchresponse.data} className='table' />) 
        }
        </div>
    )
}

export default FetchComponent
