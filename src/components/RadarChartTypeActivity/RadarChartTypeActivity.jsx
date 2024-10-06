import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { getPerformance } from '../../services/api';


function RadarCharTypeActivity() {

    const [performance, setPerformance] = useState([]);
    const USER_ID=12;

    const translate = (english) => {
        
        let tradInFrench;
        switch (english) {
            case "cardio":
                tradInFrench = "Cardio";
                break;
            case "energy":
                tradInFrench = "Énergie";
                break;
            case "endurance":
                tradInFrench = "Endurance";
                break;
            case "strength":
                tradInFrench = "Force";
                break;
            case "speed":
                tradInFrench = "Vitesse";
                break;
            case "intensity":
                tradInFrench = "Intensité";
                break;
            default:
                tradInFrench = "";
                break;
            }
        return tradInFrench;
    }

    useEffect(()=>{
        async function getPerf() {
            try {
                const performance = await getPerformance(USER_ID);
                const cleanedPerformance = performance.data.map(item=>({
                    value: item.value,
                    kind: performance.kind[item.kind]
                }))
                console.log(cleanedPerformance)
                setPerformance(cleanedPerformance);
            } catch (error) {
                console.log(error);
            }
        }
        getPerf();
    },[USER_ID]);

    return(
        <ResponsiveContainer width={278} height={263} >
            <RadarChart 
                cx="50%" 
                cy="50%" 
                outerRadius="70%" 
                innerRadius="5%" 
                data={performance} 
                style={{ backgroundColor: '#282D30' }}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis 
                    dataKey="kind" 
                    tick={{fontSize:11, fontWeight:500}}
                    stroke="white"
                    tickFormatter={(english) => translate(english)}
                    dy={5}    
                    tickLine={false}
                />
                <Radar
                    name="Performance"
                    dataKey="value"
                    fill="#e60000"
                    fillOpacity={0.7}
                />            
            </RadarChart>
        </ResponsiveContainer>
    )
}


export default RadarCharTypeActivity;