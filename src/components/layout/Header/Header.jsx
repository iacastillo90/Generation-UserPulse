import "./Header.css";

import MyNavbar from "./components/MyNavbar";

function Header () {

    return(
        <header className="bg-primary text-white p-3">
            <h1>UserPulse</h1>
            <MyNavbar />
        </header>
    );
}

export default Header;