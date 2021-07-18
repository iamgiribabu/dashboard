import React, {useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import './CountryPicker.styles.scss'
import {fetchCountries} from '../../redux/fetch-api/fetch.action'
import { useDispatch, useSelector } from 'react-redux'

const CountryPicker = ({handleCountryChange}) => {
    const countries = useSelector(state => state.fetch.countries)
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchCountries())
    }, [])

    // console.log(countries)

    return (
        <FormControl className='form-control'>
            <NativeSelect defaultValue='' onChange={(e)=>{handleCountryChange(e.target.value)}}>
            <option value=''>Global</option>
                {
                    countries.map((country, i) => <option key={i} value={country}>{country}</option> )
                }
                
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
