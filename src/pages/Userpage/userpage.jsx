import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import Nav from "../../components/Nav/nav";
import { getUser, getUserActivity } from "../../services/api";

function Userpage () {

    const USER_ID = 12;

    const [userInfos, setUserInfos] = useState({});
    const [userDatas, setUserDatas] = useState({});
    const [userActivity, setUserActivity] = useState({});


    useEffect(()=>{
        async function getOneUser() {
            try {
                const user = await getUser(USER_ID);
                setUserDatas(user.data);
                setUserInfos(user.data.userInfos);
            } catch (error) {
                console.log(error);
            }
        }
        getOneUser();
    },[USER_ID]);

    useEffect(()=> {
        async function getActivity() {
            try {
                const userActivity = await getUserActivity(USER_ID);
                setUserActivity(userActivity.data);
                console.log(userActivity.data);
            } catch (error) {
                console.log(error);
            }
        }
        getActivity();
    }, [USER_ID]);

    return (
        <div className="userpage">
            <Header />
            <div className="main">
                <Nav />
                <div>Bonjour {userInfos.firstName}</div>
            </div>
        </div>
    )
}

export default Userpage