import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { getAverageSession } from '../../services/api';

function LinechartAverageSession(props) {


    const [averageSession, setAverageSession] = useState([]);
    const {userId}=props;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    style={{
                        background: 'white',
                        color: "black",
                        fontSize: '10px',
                        fontWeight: '500',
                        textAlign: 'center',
                        padding: '5px',
                        borderRadius: '5px',
                    }}
                >
                    {payload[0]?.value ? (
                        <p>{`${payload[0].value} min`}</p>
                    ) : (
                        <p>Pas de données</p>
                    )}
                </div>
            );
        }
        return null;
    };

    useEffect(() => {
        async function getAverage() {
            try {
                const averageSession = await getAverageSession(userId);
                setAverageSession(averageSession);
                console.log("averagesession", averageSession)
            } catch (error) {
                console.log(error);
            }
        }
        getAverage();
    }, [userId]);

    const daysWeekTxt = (day) => {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return days[day - 1];
    };

    return (
        <div className="average">
            <h3 className="average__title">
                Durée moyenne des <br />
                sessions
            </h3>
            <ResponsiveContainer width={278} height={263}>
                <LineChart 
                    data={averageSession}
                    margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
                >
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        dot={false}
                        activeDot={{ r: 8, strokeOpacity: 0.2, strokeWidth: 10, fill: 'white' }}
                        stroke="white"
                        strokeWidth={2}
                    />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        mirror={true}
                        padding={{ left: 10, right: 10 }}
                        stroke="white"
                        style={{ fontSize: 12, fontWeight: 500 }}
                        tickLine={false}
                        tickFormatter={daysWeekTxt}
                    />
                    <YAxis
                        axisLine={false}
                        domain={['dataMin - 10', 'dataMax + 10']}
                        mirror={true}
                        tickCount={0}
                        tickLine={false}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{ stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 50 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}


export default LinechartAverageSession;
