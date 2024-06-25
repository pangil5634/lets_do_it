import {useRecoilState} from "recoil";
import {userInfo} from "../../Atom";
import {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


function AtomContext() {
    const [userInfoDataByRecoil, setUserInfoDataByRecoil] = useRecoilState(userInfo);
    const [userInfoData, setUserInfoData] = useState(userInfoDataByRecoil);
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserInfoData((prevData) => ({
            ...prevData,
            [name]: name === "date" ? new Date(value) : value
        }));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const navigator = useNavigate();
    const handleSubmit = () => {
        console.log(userInfoData);
        if (window.confirm("제출하시겠습니까?")) {
            setUserInfoDataByRecoil(userInfoData);
            alert("제출되었습니다.");
            navigator("/atom_context_result");
        }
    }
    return (
        <Container>
            <Title>Atom Context Exercise</Title>

            <InputArea> email <input type="text" name="email" value={userInfoData.email} onChange={handleInputChange} /></InputArea>
            <InputArea> password <input type="password" name="password" value={userInfoData.password} onChange={handleInputChange} /></InputArea>
            <InputArea> nickname <input type="text" name="nickname" value={userInfoData.nickname} onChange={handleInputChange} /></InputArea>
            <InputArea> homepage <input type="text" name="homepage" value={userInfoData.homepage} onChange={handleInputChange} /></InputArea>
            <InputArea> Data <input type="date" name="date" value={formatDate(userInfoData.date)} onChange={handleInputChange} /></InputArea>
            <InputArea> profileImage <input type="text" name="profileImage" value={userInfoData.profileImage} onChange={handleInputChange} /></InputArea>
            <InputArea> introduce <input type="text" name="introduce" value={userInfoData.introduce} onChange={handleInputChange} /></InputArea>
            <button onClick={handleSubmit}>저장하기</button>
        </Container>
    );

}
export const Title = styled.h3`

`
const InputArea = styled.div`
    padding : 10px 0px ;

    input {
        margin-left: 30px;
    }
`

export const Container = styled.div`
    padding : 20px;
`

export default AtomContext;