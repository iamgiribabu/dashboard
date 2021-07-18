import React, {useEffect, useState} from 'react'
import './App.css';
import Cards from './components/cards/Cards'
import Charts from './components/chart/Charts'
import CountryPicker from './components/countryPicker/CountryPicker'
import Header from './components/header/header.component'
import Fetchtable from './components/table/table.component';
import 'bootstrap/dist/css/bootstrap.min.css'
import {fetchCases} from './redux/fetch-api/fetch.action'
import {useSelector,useDispatch} from 'react-redux'
import {Switch, Route} from "react-router-dom";
import RegisterForm from './components/registerForm/RegisterForm';
import {auth} from './firebase/firebase'
import SignIn from './components/signin/signIn';

const App = () => {
  const fetchdata = useSelector(state => state.fetch)
  const [getcountry, setCountry] = useState('')
  const [userId, setUserId] = useState('')
  const dispatch = useDispatch();
  auth.onAuthStateChanged(user => {
    if(user) setUserId(user.uid) 
  })
  useEffect(()=>{
      dispatch(fetchCases())
    
  },[])

  const HandleCountryChange = async (country) => {
    setCountry(country)
    dispatch(fetchCases(country))
    
  }
  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Header/>
          {
            fetchdata.data ? (
              <div className='compos'>
                <Cards data = {fetchdata.data}/>
                <CountryPicker handleCountryChange = {HandleCountryChange}/>
                <Charts data={fetchdata.data} country={getcountry}/>
              </div>
              
            ) : `${fetchdata.status}....... Please check your Internet connection .........`
          }
        </Route>
        <Route exact path='/register'>
          <RegisterForm/>
        </Route>
        { userId ? 
            <Route exact path='/userstable'>
              <Fetchtable/>
            </Route> 
          : null
        }
        <Route exact path='/signIn'>
          <SignIn/>
        </Route>
       
      </Switch>

    </div>
  );
}

export default App;
