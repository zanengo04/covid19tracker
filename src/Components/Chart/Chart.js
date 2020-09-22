import React from 'react'

import {Line} from 'react-chartjs-2'
import styles from './Chart.module.css'
export default function Chart({dailyData}) {
    
    const lineChart=(
        dailyData.length?
        <Line 
            data={{
                labels: dailyData.map(({date}) =>date),
                datasets: [{
                    data: dailyData.map(({confirmed}) =>confirmed),
                    label: 'Infected',
                    borderColor: 'blue',
                    fill: true,
                },{
                    data: dailyData.map(({deaths}) =>deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill: true,     
                },{
                    data: dailyData.map(({recovered}) =>recovered),
                    label: 'Recovered',
                    borderColor: 'green',
                    backgroundColor:'rgba(0,255, 0, 0.5)',
                    fill: true,   
                }],
            }}
        />: null
    )
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
