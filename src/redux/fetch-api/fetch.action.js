import { FETCH_RESULTS, FETCH_FAILURE, FETCH_DAILY_RESULT, FETCH_COUNTRIES } from './fetch.types';
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

const fetchFailure = (err) =>( {
    type : FETCH_FAILURE,
    payload : err
} )

export const fetchCases = (country)=>{
    let changeAbleUrl = url;
    if(country){
        changeAbleUrl = `${url}/countries/${country}`
    }
    return(
        async dispatch =>{ 
            try{
                const { data : {confirmed , recovered , deaths , lastUpdate } } = await axios.request(changeAbleUrl)
    
                dispatch({
                    type : FETCH_RESULTS,
                    payload : {
                        confirmed ,
                        recovered ,
                        deaths ,
                        lastUpdate 
                    }
                })
            }catch(err){
                dispatch(fetchFailure(err.message))
            }
        }  
    )
}

export const fetchDailyData = () => { 
    return (
        async dispatch =>{ 
            try{
               const {data} = await  axios.request(`${url}/daily`)
               const modifiedRes = data.map(data => ({
                   confirmed : data.confirmed.total ,
                   deaths :data.deaths.total,
                   date : data.reportDate
               }))
               dispatch({
                   type : FETCH_DAILY_RESULT,
                   payload : modifiedRes
               })
            }catch(err){
                dispatch(fetchFailure(err.message))
            }
       }
    )    
}

export const fetchCountries = ()=> {
    return (
        async dispatch => {
            try{
                const {data : {countries}} = await axios.request(`${url}/countries`)
                const modifieCountry = countries.map(country => country.name)
             
                dispatch({
                    type : FETCH_COUNTRIES,
                    payload : modifieCountry
                })
            }catch(err){
                console.log(err)
                dispatch(fetchFailure(err.message))
                
            }
        }
    )
    
}