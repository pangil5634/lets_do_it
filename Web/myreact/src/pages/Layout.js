import {Link} from "react-router-dom";
import {Outlet} from 'react-router-dom';

import {MenuBar} from "../components/Menubar";
// import {useContext} from "react"; import {UserContext} from
// "../contexts/userContext";

function Layout() {

    return (
        <div>
            <MenuBar>
                {/* HomePage */}
                <Link to="/">
                    <label>Home</label>
                </Link>

                {/* MyPage */}
                <Link to="/MyPage">
                    <label>MyPage</label>
                </Link>
            </MenuBar>

            <main>
                <Outlet/>
            </main>

        </div>
    );
}

export default Layout;