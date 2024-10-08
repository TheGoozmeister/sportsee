import { useState,useEffect } from "react";
import { getKeyDatas } from "../../services/api";
import CardKeyData from "../CardKeyData/CardKeyData";
const proteinIcon = require('../../assets/icons/protein-icon.png');
const caloriesIcon = require('../../assets/icons/calories-icon.png');
const carbsIcon = require('../../assets/icons/carbs-icon.png');
const fatIcon = require('../../assets/icons/fat-icon.png');


function CardsContainer(props) {

    const [keyDatas, setKeyDatas] = useState([]);
    const {userId}=props;

    useEffect(()=>{
        async function getKD() {
            try {
                const keyDatas = await getKeyDatas(userId);
                console.log(keyDatas);
                setKeyDatas(keyDatas);
            } catch (error) {
                console.log(error);
            }
        }
        getKD();
    },[userId]);


    return (
        <div className="cardsContainer">
            <CardKeyData label="Calories" unit="kCal" amount={keyDatas.calorieCount} icon={caloriesIcon} /> 
            <CardKeyData label="Protéines" unit="g" amount={keyDatas.proteinCount} icon={proteinIcon} /> 
            <CardKeyData label="Glucides" unit="g" amount={keyDatas.carbohydrateCount} icon={carbsIcon} /> 
            <CardKeyData label="Lipides" unit="g" amount={keyDatas.lipidCount} icon={fatIcon} /> 
        </div>
    )
}


export default CardsContainer;