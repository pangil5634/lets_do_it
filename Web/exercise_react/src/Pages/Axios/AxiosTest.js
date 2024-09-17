// import {useEffect, useState} from "react";
// import styled from "styled-components";
// import {
//     getUserData,
//     addUserData,
//     getScheduleData,
//     getScoreData,
//     addScheduleData,
//     addScoreData
// } from "./API/UserAPI";

import axios from "axios";
import { useState } from "react";

// function AxiosTest() {
//     const [userData, setUserData] = useState([]);
//     const [scheduleData, setScheduleData] = useState([]);
//     const [scoreData, setScoreData] = useState([]);

//     const [newUserData, setNewUserData] = useState({
//         uid: "",
//         pid: "",
//         name: "",
//         userType: 0,
//         email: "",
//         phone: "",
//         part: ""
//     });

//     const [newScheduleData, setNewScheduleData] = useState(
//         {date: "", title: "", category: 0, place: "", desc: ""}
//     )

//     const [newScoreData, setNewScoreData] = useState(
//         {uid: "", pid: "", plus: [], minus: [], total: 0}
//     )
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const tempUserData = await getUserData();
//                 setUserData(tempUserData.data);
//                 const tempScheduleData = await getScheduleData();
//                 setScheduleData(tempScheduleData.data);
//                 const tempScoreData = await getScoreData();
//                 setScoreData(tempScoreData.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchData();
//     }, []); // 빈 배열을 추가하여 useEffect가 한 번만 실행되도록 함

//     const getUserTypeText = (userType) => {
//         switch (userType) {
//             case 0:
//                 return "관리자";
//             case 1:
//                 return "파도";
//             case 2:
//                 return "파디";
//             default:
//                 return "알 수 없음";
//         }
//     };
//     const getScheduleTypeText = (scheduleType) => {
//         switch (scheduleType) {
//             case 0:
//                 return "전체";
//             case 1:
//                 return "웹";
//             case 2:
//                 return "기획";
//             case 3:
//                 return "iOS";
//             case 4:
//                 return "서버";
//             case 5:
//                 return "디자인";
//             default:
//                 return "알 수 없음";
//         }
//     };

//     const handleUserInputChange = (e) => {
//         const {name, value} = e.target;
//         setNewUserData({
//             ...newUserData,
//             [name]: value
//         });
//     };
//     const handleScheduleInputChange = (e) => {
//         const {name, value} = e.target;
//         setNewScheduleData({
//             ...newScheduleData,
//             [name]: value
//         });
//     };
//     const handleScoreInputChange = (e) => {
//         const {name, value} = e.target;
//         setNewScoreData({
//             ...newScoreData,
//             [name]: value
//         });
//     };

//     const handleUserSubmit = async (e) => {
//         e.preventDefault();
//         // if (!newUserData.name || !newUserData.email || !newUserData.phone ||
//         // !newUserData.part) {     alert("모든 필드를 입력해주세요.");     return; }
//         try {
//             const response = await addUserData(newUserData);
//             console.log("New user added:", response);
//             setUserData([
//                 ...userData,
//                 response
//             ]);
//             setNewUserData({
//                 uid: "",
//                 pid: "",
//                 name: "",
//                 userType: 0,
//                 email: "",
//                 phone: "",
//                 part: ""
//             });
//         } catch (error) {
//             console.error("Error adding new user:", error);
//         }
//     };
//     const handleScoreSubmit = async (e) => {
//         e.preventDefault();
//         // if (!newUserData.name || !newUserData.email || !newUserData.phone ||
//         // !newUserData.part) {     alert("모든 필드를 입력해주세요.");     return; }
//         try {
//             const response = await addScoreData(newScoreData);
//             console.log("New score added:", response);
//             setUserData([
//                 ...scoreData,
//                 response
//             ]);
//             setNewScoreData({uid: "", pid: "", plus: [], minus: [], total: 0});
//         } catch (error) {
//             console.error("Error adding new score:", error);
//         }
//     };
//     const handleScheduleSubmit = async (e) => {
//         e.preventDefault();
//         // if (!newScheduleData.date || !newScheduleData.title ||
//         // !newScheduleData.category) {     alert("모든 필드를 입력해주세요.");     return; }
//         try {
//             const response = await addScheduleData(newScheduleData);
//             console.log("New schedule added:", response);
//             setScheduleData([
//                 ...scheduleData,
//                 response
//             ]);
//             setNewScheduleData({date: "", title: "", category: 0, place: "", desc: ""});
//         } catch (error) {
//             console.error("Error adding new schedule:", error);
//         }
//     };

//     return (
//         <div>
//             <Title test="Axios Test"/>
//             <PageContainer>
//                 <Container backgroundColor="#D8EFD3">
//                     <table border="1px solid black">
//                         <tr>
//                             <th>이름</th>
//                             <th>이메일</th>
//                             <th>분류</th>
//                             <th>파트</th>
//                             <th>연락처</th>
//                         </tr>
//                         {
//                             userData.map((userData, index) => (
//                                 <tr key={index}>

//                                     <td>{userData.name}</td>
//                                     <td>{userData.email}</td>
//                                     <td>{getUserTypeText(userData.userType)}</td>
//                                     <td>{userData.part}</td>
//                                     <td>{userData.phone}</td>
//                                 </tr>
//                             ))
//                         }
//                     </table>
//                     <Form onSubmit={handleUserSubmit}>
//                         <label>
//                             이름:
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={newUserData.name}
//                                 onChange={handleUserInputChange}
//                                 required="required"/>
//                         </label>
//                         <br/>
//                         <label>
//                             이메일:
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={newUserData.email}
//                                 onChange={handleUserInputChange}
//                                 required="required"/>
//                         </label>
//                         <br/>
//                         <label>
//                             분류:
//                             <select
//                                 name="userType"
//                                 value={newUserData.userType}
//                                 onChange={handleUserInputChange}>
//                                 <option value={0}>관리자</option>
//                                 <option value={1}>파도</option>
//                                 <option value={2}>파디</option>
//                             </select>
//                         </label>
//                         <br/>
//                         <label>
//                             파트:
//                             <input
//                                 type="text"
//                                 name="part"
//                                 value={newUserData.part}
//                                 onChange={handleUserInputChange}
//                                 required="required"/>
//                         </label>
//                         <br/>
//                         <label>
//                             연락처:
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 value={newUserData.phone}
//                                 onChange={handleUserInputChange}
//                                 pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
//                                 placeholder="000-0000-0000 형식으로 입력"
//                                 required="required"/>
//                         </label>
//                         <br/>
//                         <button type="submit">사용자 추가</button>
//                     </Form>
//                 </Container>
//                 <Container backgroundColor="#95D2B3">

//                     {
//                         scoreData.map((scoreData, index) => (
//                             <div key={index}>
//                                 <p>{scoreData.uid}</p>
//                                 <div>
//                                     {
//                                         scoreData
//                                             .plus
//                                             .map(
//                                                 (pointInfo, p_index) => (<p key={p_index}>{pointInfo.point}점 - {pointInfo.desc}</p>)
//                                             )
//                                     }
//                                 </div>
//                                 <div>
//                                     {
//                                         scoreData
//                                             .minus
//                                             .map(
//                                                 (pointInfo, p_index) => (<p key={p_index}>-{pointInfo.point}점 - {pointInfo.desc}</p>)
//                                             )
//                                     }
//                                 </div>
//                             </div>
//                         ))
//                     }
//                     <Form onSubmit={handleScoreSubmit}>
//                         <label>
//                             UID:
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={newUserData.name}
//                                 onChange={handleScoreInputChange}
//                                 required="required"/>
//                         </label>
//                         <br/>
//                         <label>
//                             점수:
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={newUserData.email}
//                                 onChange={handleScoreInputChange}
//                                 required="required"/>
//                         </label>
//                         <br/>
//                         <label>
//                             분류:
//                             <select
//                                 name="userType"
//                                 value={newUserData.userType}
//                                 onChange={handleScoreInputChange}>
//                                 <option value={0}>MVP</option>
//                                 <option value={1}>파도</option>
//                                 <option value={2}>파디</option>
//                             </select>
//                         </label>
//                         <br/>
//                         <button type="submit">사용자 추가</button>
//                     </Form>
//                 </Container>
//                 <Container backgroundColor="#55AD9B">
//                     {
//                         scheduleData.map((scheduleData, index) => (
//                             <div key={index}>
//                                 <p>{getScheduleTypeText(scheduleData.category)}</p>
//                                 <p>날짜 : {scheduleData.date}</p>
//                                 <p>제목 : {scheduleData.title}</p>
//                                 {
//                                     scheduleData.place != ""
//                                         ? <p>장소 : {scheduleData.place}</p>
//                                         : <p>설명 : {scheduleData.desc}</p>
//                                 }
//                                 <br/>
//                             </div>
//                         ))
//                     }
//                     <Form onSubmit={handleScheduleSubmit}>
//                         <label>
//                             날짜:
//                             <input
//                                 type="date"
//                                 name="date"
//                                 value={newScheduleData.date}
//                                 onChange={handleScheduleInputChange}
//                                 required="required"/>
//                         </label>
//                         <br/>
//                         <label>
//                             제목:
//                             <input
//                                 type="text"
//                                 name="title"
//                                 value={newScheduleData.title}
//                                 onChange={handleScheduleInputChange}
//                                 required="required"/>
//                         </label>
//                         <br/>
//                         <label>
//                             카테고리:
//                             <select
//                                 name="category"
//                                 value={newScheduleData.category}
//                                 onChange={handleScheduleInputChange}
//                                 required="required">
//                                 <option value={0}>전체</option>
//                                 <option value={1}>과제</option>
//                             </select>
//                         </label>
//                         <br/> {
//                             newScheduleData.category == 0 && (
//                                 <label>
//                                     장소:
//                                     <input type="text" name="place" value={newScheduleData.place} onChange={handleScheduleInputChange} required={newScheduleData.category === 1}
//                                         // 숫자로 비교
//                                     />
//                                 </label>
//                             )
//                         }
//                         <br/> {
//                             newScheduleData.category != 0 && (
//                                 <label>
//                                     설명:
//                                     <textarea name="desc" value={newScheduleData.desc} onChange={handleScheduleInputChange} required={newScheduleData.category !== 1}
//                                         // 숫자로 비교
//                                     />
//                                 </label>
//                             )
//                         }

//                         <br/>
//                         <button type="submit">일정 추가</button>
//                     </Form>
//                 </Container>
//             </PageContainer>
//         </div>
//     )
// }

// const Title = ({test}) => {
//     return (<h1>
//         {test}
//     </h1>);
// }

// const PageContainer = styled.div `
//     width: 100%;
//     display: flex;
// `
// const Container = styled.div `
//     width: 33%;
//     height : 1000px;
//     background-color: ${props => props.backgroundColor || ''};;
// `;

// const Form = styled.form `
//     width: 500px;
//     background-color: skyblue;
// `
// export default AxiosTest;
import { useCookies } from 'react-cookie';

function AxiosTest() {
    const data = "oksk6689@gmail.com";
    const [token, setToken] = useState();
    const handleLogin = () => {
        alert("호출");
        const response = handleLoginAPI(data);
    }
    
    const handleLoginAPI = async (email) => {
        try {
            const response = await axios.post(
                `https://we-pard.store/v1/users/login`, { email },
                {withCredentials : true}
            );
            setToken(response.data);
            return response.data;
            
        } catch (error) {
            console.log("get error");
            // throw error;
        }
    };
    const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
    const handleClickToggle = () => {
        setCookie('Authorization', token, {
            path: '/', 
            maxAge: 60 * 60,
            // domain: 'pard-app-project.web.app'
            domai : `we-pard.store`
        });
    }
    return (
        <div>
            <h1>hello</h1>
            <button onClick={handleLogin}>호출하기</button>
            <button onClick={handleClickToggle}>버튼</button>
        </div>
    );
}

export default AxiosTest;