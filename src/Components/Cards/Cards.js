import React from 'react'

import CountUp from 'react-countup';
import styles from './Cards.module.css'
import {Card,CardContent, Typography, Grid } from '@material-ui/core'
import cx from 'classnames'

export default function Cards({data:
    {NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed,TotalDeaths,TotalRecovered, CurrentDate}
    }) {
    if (!TotalConfirmed){
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid 
                    xs={12}
                    md={3}
                    item component={Card} 
                    className={cx(styles.card,styles.infected)}
                >
                    <CardContent>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={TotalConfirmed}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(CurrentDate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid 
                    xs={12}
                    md={3}
                    item component={Card} 
                    className={cx(styles.card,styles.recovered)}
                >
                    <CardContent>
                        <Typography color="textSecondary">Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp 
                                start={0}
                                end={TotalRecovered}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(CurrentDate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid 
                    xs={12}
                    md={3}
                    item component={Card} 
                    className={cx(styles.card,styles.deaths)}
                >
                    <CardContent>
                        <Typography color="textSecondary">Death</Typography>
                        <Typography variant="h5">
                        <CountUp 
                                start={0}
                                end={TotalDeaths}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(CurrentDate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths cause by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
