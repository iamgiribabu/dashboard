import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchDailyData } from '../../redux/fetch-api/fetch.action'
import {Line , Bar} from 'react-chartjs-2'
import './Charts.styles.scss'

const Charts = ({data : {confirmed , recovered , deaths}, country}) => {
    const dailyData = useSelector(state => state.fetch.dailyData)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchDailyData())
    },[])

     

    const LineChart = () => (
        dailyData ? (
            <Line data={{
                labels : dailyData.map(({date})=>date),
                datasets : [{
                    data :  dailyData.map(({confirmed})=>confirmed),
                    label : 'Infected',
                    borderColor : '#3333ff',
                    fill :true,
                }, {
                    data :  dailyData.map(({deaths})=>deaths),
                    label : 'Deaths',
                    borderColor : '#3333ff',
                    backgroundColor : 'rgba(255, 0 ,0, 0.5)',
                    fill :true,
                }]
            }} />
        ) : null
    )

    const BarChart = () => (
        confirmed ? (
            <Bar 
                data = {{
                    labels : ['Infected', 'Recovered', 'Deaths'],
                    datasets : [{
                        labels : 'People',
                        backgroundColor : [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        data : [confirmed.value , recovered.value , deaths.value]
                    }]
                }}
                options = {
                    {
                        legend : { display : false},
                        title : { display : true, text : `Current state in ${country}`}
                    }
                }
            
            
            />
        ) : null
    )

    return (
        <div className='chart-container'>
        {    !country ? (
                <LineChart />
            ) : ( 
                <BarChart /> 
            ) 
        }    
            
            
        </div>
    )
}

export default Charts
