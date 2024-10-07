import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "../data/mockData"


const useMockData = true; 


class UserModel {
    constructor(data) {
        this.id = data.id; 
        this.userInfos = {
            firstName: data.userInfos.firstName,
            lastName: data.userInfos.lastName,
            age: data.userInfos.age,
        };
        this.todayScore = data.todayScore || data.score;
        this.keyData = {
            calorieCount: data.keyData.calorieCount,
            proteinCount: data.keyData.proteinCount,
            carbohydrateCount: data.keyData.carbohydrateCount,
            lipidCount: data.keyData.lipidCount,
        };
    }
}
class UserActivityModel {
    constructor(data) {
        this.userId = data.userId;
        this.sessions = data.sessions;
    }
}

class UserAverageSessionModel {
    constructor(data) {
        this.userId = data.userId;
        this.sessions = data.sessions;
    }
}
class UserPerformanceModel {
    constructor(data) {
        this.userId = data.userId;
        this.kind = data.kind;
        this.data = data.data;
    }
}


async function getUser(userId) {
    if (useMockData) {
        const mockUser = USER_MAIN_DATA.find(user => user.id === parseInt(userId));
        console.log("user", mockUser)
        console.log(new UserModel(mockUser))
        return new UserModel(mockUser);
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}`);
            const user = await response.json();
            return new UserModel(user.data);
        } catch (error) {
            console.log(error);
        }
    }
}

async function getUserInfos(userId) {
    if (useMockData) {
        const mockUser = USER_MAIN_DATA.find(user => user.id === parseInt(userId));
        return new UserModel(mockUser).userInfos;
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}`);
            const user = await response.json();
            return new UserModel(user.data).userInfos;
        } catch (error) {
            console.log(error);
        }
    }
}

async function getUserActivity(userId) {
    if (useMockData) {
        const mockActivity = USER_ACTIVITY.find(activity => activity.userId === parseInt(userId));
        return new UserActivityModel(mockActivity);
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
            const userActivity = await response.json();
            return new UserActivityModel(userActivity.data);
        } catch (error) {
            console.log(error);
        }
    }
}

async function getAverageSession(userId) {
    if (useMockData) {
        const mockAverageSessions = USER_AVERAGE_SESSIONS.find(session => session.userId === parseInt(userId));
        return new UserAverageSessionModel(mockAverageSessions);
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
            const sessions = await response.json();
            return new UserAverageSessionModel(sessions.data);
        } catch (error) {
            console.log(error);
        }
    }
}

async function getCompletion(userId) {
    if (useMockData) {
        const mockUser = USER_MAIN_DATA.find(user => user.id === parseInt(userId));
        const userModel = new UserModel(mockUser);
        return userModel.todayScore;
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}`);
            const user = await response.json();
            const userModel = new UserModel(user.data);
            return userModel.todayScore;
        } catch (error) {
            console.log(error);
        }
    }
}

async function getPerformance(userId) {
    if (useMockData) {
        const mockPerformance = USER_PERFORMANCE.find(performance => performance.userId === parseInt(userId));
        return new UserPerformanceModel(mockPerformance);
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
            const performance = await response.json();
            return new UserPerformanceModel(performance.data);
        } catch (error) {
            console.log(error);
        }
    }
}

async function getKeyDatas(userId) {
    if (useMockData) {
        const mockUser = USER_MAIN_DATA.find(user => user.id === parseInt(userId));
        const userModel = new UserModel(mockUser);
        return userModel.keyData;
    } else {
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}`);
            const user = await response.json();
            const userModel = new UserModel(user.data);
            return userModel.keyData;
        } catch (error) {
            console.log(error);
        }
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