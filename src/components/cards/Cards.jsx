import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import './Cards.styles.scss'

const Cards = ({data}) => {
    const {confirmed, recovered, deaths , lastUpdate} = data
    if(!confirmed) return "Loading...."
    
    return (
        <div className='card-container'>
                <Grid item component={Card} xs={12} md={3} className='infected'  >
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant = 'h5' component='h2'>
                            <CountUp start={0} end={confirmed.value} duration= {2.75} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                
                </Grid>
            
                <Grid item component={Card} xs={12} md={3} className='recovered'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant = 'h5' component='h2'>
                            <CountUp start={0} end={recovered.value} duration= {2.75} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                
                </Grid>
            

                <Grid item component={Card} xs={12} md ={3} className='deaths'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant = 'h5' component='h2'>
                            <CountUp start={0} end={deaths.value} duration= {2.5} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                
                </Grid>
            

           

        </div>
    )
}

export default Cards
