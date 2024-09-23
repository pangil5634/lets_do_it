import axios from "axios";
import { useState } from "react";

function SpringAPITest() {

    const [userId, setUserId] = useState(null);
    const [userData, setUserData] = useState(null);

    const handleGetData = async () => {
        if (userId == null) {
            alert("user Id를 입력해주세요.");
            return null;
        }
        const response = await getData();  // 데이터를 기다린 후 처리
        setUserData(response);
        console.log("data", response);     // 응답 데이터를 출력
    }

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/user/detail?id=" + userId);
            console.log(response.data);
            return response.data;          // 데이터를 반환
        } catch (error) {
            console.log("error", error);   // 에러 메시지를 출력
            return null;                   // 에러 시 null 반환
        }
    }
    return (
        <div>
            Spring API Test Pages
            <div>id : <input type = "text" onChange={(e) => setUserId(e.target.value)}/></div>
            <button onClick={handleGetData}>조회하기</button>
            {
                userData && (
                    userData.username != "" ? 
                        "\n" + userData.username + " / " + userData.password + " / " + userData.name + " / " + userData.phone + " / "
                        : "없는 사용자입니다."
                )
            }
        </div>
    )
}


export default SpringAPITest;