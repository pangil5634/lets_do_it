import {Link, useNavigate} from "react-router-dom";
import {Outlet} from 'react-router-dom';
// import {useContext} from "react";
// import {UserContext} from "../contexts/userContext";

function Layout() {

    return (
        <div>
            {/* <Div justifyContent="space-between" height="40px" bgColor="black">
                <Div justifyContent="start" height="40px">
                    <div style ={myStyle}>
                        <img src={HomeImage} alt="Home" width="20px"/>
                    </div>
                    <Link
                        to={localStorage.getItem('emailVerified') === 'true'
                            ? "/HomePage"
                            : "/"
}
                        style={linkStyle}
                        activeStyle={hoverStyle}>

                        <Menu >천국 말고 홈화면으로 돌아가시기</Menu>
                    </Link>
                </Div>
                <Div height="40px" justifyContent="end">
                    <Link
                        to={localStorage.getItem('emailVerified') === 'true'
                            ? "/AddPage"
                            : "/"}
                        style={linkStyle}>
                        <Menu>장례식 등록하기</Menu>
                    </Link>
                    <Link
                        to={localStorage.getItem('emailVerified') === 'true'
                            ? "/MyPage"
                            : "/"}
                        style={linkStyle}>
                        <Menu>마이페이지</Menu>
                    </Link>
                    <Button height="40px" fontSize="15px" onClick={logOutHandler}>LogOut</Button>
                </Div>
            </Div> */}
            <div>
                <p>메뉴바</p>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;