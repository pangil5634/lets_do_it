import axios from "axios";

export const getUserData = async () => {
    // getUserData 함수 정의 - 비동기로 데이터를 가져오는 역할
    try {
        // axios를 사용하여 '/data.json' 엔드포인트에서 데이터를 가져오기
        const response = await axios.get('http://localhost:3001/users');

        // 가져온 데이터를 콘솔에 출력 console.log("user get data", response); 가져온 데이터를 반환
        return response;
    } catch (error) {

        // 에러가 발생한 경우 콘솔에 에러 메시지 출력
        console.error("Error fetching user data:", error);

        // 에러를 다시 throw하여 호출한 측에서 처리할 수 있도록 함
        throw error;
    }
}
export const addUserData = async (userData) => {
    try {
        const response = await axios.post('http://localhost:3001/users', userData);
        return response.data; // 새로 추가된 사용자 데이터 반환
    } catch (error) {
        console.error("Error adding user data:", error);
        throw error;
    }
}

export const getScheduleData = async () => {
    // getUserData 함수 정의 - 비동기로 데이터를 가져오는 역할
    try {
        // axios를 사용하여 '/data.json' 엔드포인트에서 데이터를 가져오기
        const response = await axios.get('http://localhost:3001/schedule');

        // 가져온 데이터를 콘솔에 출력 console.log("user get data", response); 가져온 데이터를 반환
        return response;
    } catch (error) {

        // 에러가 발생한 경우 콘솔에 에러 메시지 출력
        console.error("Error fetching schedule data:", error);

        // 에러를 다시 throw하여 호출한 측에서 처리할 수 있도록 함
        throw error;
    }
}
export const addScheduleData = async (scheduleData) => {
    try {
        const response = await axios.post('http://localhost:3001/schedule', scheduleData);
        return response.data; // 새로 추가된 사용자 데이터 반환
    } catch (error) {
        console.error("Error adding user schedule:", error);
        throw error;
    }
}


export const getScoreData = async () => {
    // getUserData 함수 정의 - 비동기로 데이터를 가져오는 역할
    try {
        // axios를 사용하여 '/data.json' 엔드포인트에서 데이터를 가져오기
        const response = await axios.get('http://localhost:3001/scores');

        // 가져온 데이터를 콘솔에 출력 console.log("user get data", response); 가져온 데이터를 반환
        return response;
    } catch (error) {

        // 에러가 발생한 경우 콘솔에 에러 메시지 출력
        console.error("Error fetching schedule data:", error);

        // 에러를 다시 throw하여 호출한 측에서 처리할 수 있도록 함
        throw error;
    }
}
export const addScoreData = async (scoreData) => {
    try {
        const response = await axios.post('http://localhost:3001/scores', scoreData);
        return response.data; // 새로 추가된 사용자 데이터 반환
    } catch (error) {
        console.error("Error adding score schedule:", error);
        throw error;
    }
}