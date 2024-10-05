import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import Nav from "../../components/Nav/nav";
import { getUser, getUserActivity } from "../../services/api";
import Barchart from "../../components/BarChart/barchart";
import LinechartAverageSession from "../../components/LinechartAverageSession/LinechartAverageSession";
import RadarCharTypeActivity from "../../components/RadarChartTypeActivity/RadarChartTypeActivity";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import RadialBarChartScore from "../../components/RadialBarChartScore/RadialBarChartScore";


function Userpage () {

    const USER_ID = 12;

    const [userInfos, setUserInfos] = useState({});


    useEffect(()=>{
        async function getOneUser() {
            try {
                const user = await getUser(USER_ID);
                setUserInfos(user.data.userInfos);
            } catch (error) {
                console.log(error);
            }
        }
        getOneUser();
    },[USER_ID]);

    return (
        <div className="userpage">
            <Header />
            <div className="main">
                <Nav />
                <div className="dataBoard">
                    <div className="dataBoard__title">
                        <div className="dataBoard__title__welcome">Bonjour <span id="firstname">{userInfos.firstName}</span></div>
                        <div className="dataBoard__title__goals">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
                    </div>
                    <div className="dataBoard__graphics">
                        <div className="dataBoard__graphics__leftSide">
                            <div className="dataBoard__graphics__leftSide__topSide">
                                <Barchart />
                            </div>
                            <div className="dataBoard__graphics__leftSide__bottomSide">
                                <div className="graphContainer">
                                    <LinechartAverageSession />
                                </div>
                                <div className="graphContainer"id="radarContainer">
                                    <RadarCharTypeActivity />
                                </div>
                                <div className="graphContainer" id="radGr">
                                    <RadialBarChartScore />
                                </div>
                            </div>
                        </div>
                        <div className="dataBoard__graphics__rightSide">
                            <CardsContainer />
                        </div>
                    </div>
                    
                    
                </div>

            </div>
        </div>
    )
}

export default Userpage