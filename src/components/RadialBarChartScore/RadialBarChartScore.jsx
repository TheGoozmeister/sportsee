import { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { getCompletion } from '../../services/api';


function RadialBarChartScore () {
    
    const [averageScore, setAverageScore] = useState([]);
    const [redFraction, setRedFraction] = useState();
    const [scorePorcent, setScorePorcent] = useState();
    const USER_ID= 12;


    useEffect(()=>{
        async function getAverage() {
            try {
                const averageScore = await getCompletion(USER_ID);
                console.log(averageScore)
                const scoreToSet = [{score: averageScore}]
                const redFraction = averageScore*360;
                setAverageScore(scoreToSet);
                setRedFraction(redFraction);
                setScorePorcent(averageScore*100);
            } catch (error) {
                console.log(error);
            }
        }
        getAverage();
    },[USER_ID]);

    return (
        <div className='radialChartScore'>
            <PieChart width={278} height={263} className="radialGr">
                <Pie
                    data={averageScore}
                    cx="45%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={80}
                    cornerRadius={10}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="score"
                    startAngle={90}
                    endAngle={90+ redFraction}
                >
                    <Cell fill="red" />
                </Pie>
                <Pie
                    data={averageScore}
                    cx="45%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="score"   
                    startAngle={90+ redFraction}
                    endAngle={450}
                >
                    <Cell fill="white" />
                </Pie>
                <text
                    x="45%"
                    y="45%"
                    textAnchor="middle"
                    fontSize={26}
                    fontWeight={700}
                    fill="black"
                >
                    {scorePorcent}%
                </text>
                <text
                    x="45%"
                    y="55%"
                    textAnchor="middle"
                    fontSize={14}
                    fill="#74798C"
                    fontWeight={500}
                >
                    de votre objectif
                </text>
                <text x={30} y={30} fill="black" fontSize={14} fontWeight={800}>
                    Score
                </text>
            </PieChart>
        </div>
        
    )
}


export default RadialBarChartScore;