async function getUser(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const user = response.json();
        return user;
    } catch (error) {
        console.log(error);
    }
}

async function getUserInfos(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const user = response.json();
        const userInfos = user.data.userInfos;
        return userInfos;
    } catch (error) {
        console.log(error);
    }
}

async function getUserActivity(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
        const userActivity = await response.json();
        const userActivitySessions = userActivity.data.sessions;
        return userActivitySessions;
    } catch (error) {
        console.log(error);
    }
}

async function getAverageSession(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
        const sessions = await response.json();
        const sessionsDatas = sessions.data.sessions;
        return sessionsDatas;
    } catch (error) {
        console.log(error)
    }
}

async function getCompletion(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const user = await response.json();
        const userCompletion = user.data.todayScore;
        return userCompletion;
    } catch (error) {
        console.log(error);
    }
}

async function getPerformance(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
        const performance = await response.json();
        const performanceDatas = performance.data;
        console.log(performanceDatas)
        return performanceDatas;
    } catch (error) {
        console.log(error);
    }
}

async function getKeyDatas(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const user = await response.json();
        const keyData = user.data.keyData;
        return keyData;
    } catch (error) {
        console.log(error);
    }
}

export {
    getUser,
    getUserInfos,
    getUserActivity,
    getAverageSession,
    getCompletion,
    getPerformance,
    getKeyDatas
}