import styled from "styled-components";
import { Container, Title } from "./AtomContext";
import { useRecoilValue } from "recoil";
import { userInfo } from "../../Atom";

function AcomContextResult() {
    const userInfoData = useRecoilValue(userInfo);
    console.log(userInfoData);
    return (
        <Container>
            <Title>Atom Context Exercise Result</Title>

            <MenuItem>email : {userInfoData.email}</MenuItem>
            <MenuItem>password : {userInfoData.password}</MenuItem>
            <MenuItem>nickname : {userInfoData.nickname}</MenuItem>
            <MenuItem>homepage : {userInfoData.homepage}</MenuItem>
            <MenuItem>Data : {userInfoData.date}</MenuItem>
            <MenuItem>profileImage : {userInfoData.profileImage}</MenuItem>
            <MenuItem>introduce : {userInfoData.introduce}</MenuItem>
        </Container>
    );
}

const MenuItem = styled.div `
    padding : 10px 0px ;

`
export default AcomContextResult;
