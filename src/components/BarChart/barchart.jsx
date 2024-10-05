import { useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';
import { getUserActivity } from '../../services/api';

function Barchart() {

    const [activity, setActivity] = useState([]);
    const USER_ID=12;

    useEffect(()=>{
        async function getActivity() {
            try {
                const userActivity = await getUserActivity(USER_ID);
                const activityWithIndex = userActivity.map((entry, index) => ({ ...entry, index: index + 1 }));
                setActivity(activityWithIndex);
            } catch (error) {
                console.log(error);
            }
        }
        getActivity();
    },[USER_ID]);
    
    const minYValue = Math.min(...activity.map(entry => entry.kilogram)) - 1;

    return(
        <div className='barchart'>
            <div className='barchart__title'>
                <div className='barchart__label'>Activité quotidienne</div>
                <div className='barchart__legend'>
                    <div className='barchart__legend__weight'>
                        <div className='barchart__legend__weight__color'></div>
                        <div className='barchart__legend__weight__label'>Poids (kg)</div>
                    </div>
                    <div className='barchart__legend__calories'>
                        <div className='barchart__legend__calories__color'></div>
                        <div className='barchart__legend__calories__label'>Calories (kCal)</div>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart
                width={500}
                height={300}
                data={activity}
                barGap={8}
                
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="index" tickMargin={15}/>
                    <YAxis
                        orientation="right"
                        dataKey="kilogram"
                        domain={[minYValue, 'dataMax']}
                    />
                    <YAxis
                        yAxisId="calories"
                        type="number"
                        domain={["dataMin -160", "dataMax +15"]}
                        hide
                    />
                    <Tooltip
                        content={({ payload, active }) => {
                            if (active) {
                                return (
                                    <div style={{ background: 'red', padding: '10px', color: 'white', display:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <p>{`${payload[0].value}kg`}</p>
                                        <p>{`${payload[1].value}Kcal`}</p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />                
                    <Bar dataKey="kilogram" fill="black" barSize={7} radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" fill="red" barSize={7} radius={[10, 10, 0, 0]} yAxisId="calories" />
                </BarChart>
            </ResponsiveContainer>
        </div>
        
    )
}


export default Barchart