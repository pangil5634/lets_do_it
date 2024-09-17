import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuLink } from "./Home";
import { useEffect, useState } from "react";
import axios from "axios";

function ScTest(){
    const [year, setYear] = useState();
    const [semester, setSemester] = useState();
    const [name, setName] = useState();
    const [count, setCount] = useState();
    const [grade, setGrade] = useState();
    const [userInfo, setUserInfo] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        switch (name) {
            case 'year':
                setYear(value);
                break;
            case 'semester':
                setSemester(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'count' :
                setCount(value);
                break;
            case 'grade':
                setGrade(value);
                break;
            default:
                break;
        }
    }

    const postData = () => {
        const fetchData = async(data) => {
            const result = await axios.post(`${process.env.REACT_APP_URL}join`, data);
            alert(result.data);
            window.location.reload();
        }
        const data = {
            sugang_year: year,
            semester : semester,
            name: name,
            count: count,
            grade : grade
        }
        fetchData(data);
    }

    const getData = () => {
        const fetchData = async () => {
            const result = await axios.get(`${process.env.REACT_APP_URL}members`);
            return result.data;
        }

        fetchData().then(data => { // 비동기 처리
            setUserInfo(data); // 데이터를 상태에 설정
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    const deleteData = (id) => {
        const fetchData = async() => {
            const result = await axios.delete(`${process.env.REACT_APP_URL}members/${id}`);
            alert(result.data);
            window.location.reload();
        }
        fetchData().catch(error => {
            console.error('Error deleting data:', error);
        });
    }


    useEffect(() => {
        getData();
    }, [])
    
    return (
        <ScTestContainer>
            <ScTestWrapper>
                <PageTitle>서버 테스트</PageTitle>
                <InputRow>
                    <InputTitle>year</InputTitle>
                    <Input type="text" name="year" value={year} onChange={handleInputChange}></Input>
                </InputRow>
                <InputRow>
                    <InputTitle>semester</InputTitle>
                    <Input type="text" name="semester" value={semester} onChange={handleInputChange}></Input>
                </InputRow>
                <InputRow>
                    <InputTitle>name</InputTitle>
                    <Input type="text" name="name" value={name} onChange={handleInputChange}></Input>
                </InputRow>
                <InputRow>
                    <InputTitle>count</InputTitle>
                    <Input type="number" name="count" value={count} onChange={handleInputChange}></Input>
                </InputRow>
                <InputRow>
                    <InputTitle>grade</InputTitle>
                    <Input type="number" name="grade" value={grade} onChange={handleInputChange}></Input>
                </InputRow>

                <InputRow>
                    <AddButton onClick={() => postData()}>등록하기</AddButton>
                </InputRow> 
                <br />
                <CardList>
                {
                
                    userInfo.map((data, index) => ( // userInfo가 배열인 경우에만 map을 사용할 수 있음

                        <CardContainer key={index}>
                            <CardRow>
                                <CardRowInfoTitle>연도</CardRowInfoTitle>
                                <CardRowInfoContent>{data.sugang_year}</CardRowInfoContent>
                            </CardRow>
                            <CardRow>
                                <CardRowInfoTitle>학기</CardRowInfoTitle>
                                <CardRowInfoContent>{data.semester}</CardRowInfoContent>
                            </CardRow>
                            <CardRow>
                                <CardRowInfoTitle>과목명</CardRowInfoTitle>
                                <CardRowInfoContent>{data.name}</CardRowInfoContent>
                            </CardRow>
                            <CardRow>
                                <CardRowInfoTitle>학점</CardRowInfoTitle>
                                <CardRowInfoContent>{data.count}</CardRowInfoContent>
                            </CardRow>
                            <CardRow>
                                <CardRowInfoTitle>이수</CardRowInfoTitle>
                                <CardRowInfoContent>{data.grade}</CardRowInfoContent>
                            </CardRow>
                            <DeleteButton onClick={() => deleteData(data.index)}>삭제하기</DeleteButton>
                        </CardContainer>
                    ))
                }
                </CardList>
                
            </ScTestWrapper>
        </ScTestContainer>
    );
}

const ScTestContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
const ScTestWrapper = styled.div `
    width: 1000px;
    height : 1000px;
    background-color: pink;
    border-radius: 20px;
    padding : 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

const PageTitle = styled.p `
    font-size: 40px;
    font-weight: bold;
    color : white;
`;

export const BlueButton = styled(Link)`
    width: 120px;
    height : 80px;
    font-size : 20px;
    background-color: rebeccapurple;
    padding : 30px;
    color : white;
`;

const CardList = styled.div`
    display: flex;
`

const CardContainer = styled.div`
    width: 200px;
    height : 150px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 10px;
    padding : 5px;
    box-sizing: border-box;
    margin: 20px;
`;

const CardRow = styled.div`
    display: flex;
`

const CardRowInfoTitle = styled.div`
    width: 30%;
    font-weight: bold;

`;

const CardRowInfoContent = styled.div`

`;

const DeleteButton = styled.button`
    width: 100%;
    height : 20px;
    background-color: skyblue;
    border : none;
    border-radius: 5px;
    &:hover {
        background-color: gainsboro;
        color : black;
    }
    margin-top: 10px;
`

const Input = styled.input`
    width: 400px;
    height : 25px;
    border-radius: 3px;
    border : none;
    padding-left: 5px;
    box-sizing: border-box;

    font-size: 15px;
`

const InputRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const InputTitle = styled.div`
    margin-right: 20px;
    font-weight: bold;
    width: 10%;
    text-align: center;
`

const AddButton = styled.button`
    width: 400px;
    height : 30px;

    background-color: gray;
    color : white;
    border : none;
    border-radius: 5px;
    font-size: 20px;
    margin-left: 115px;

    &:hover{
        background-color: skyblue;
        color : white;
    }

`
export default ScTest;