import { Col, Container, Row } from "react-bootstrap"
import { Outlet } from "react-router";
import MainSidebar from "../../MainSidebar/MainSidebar"
import './MainLayout.css'

const MainLayout = (props) => {
    console.log(props, 'chill');
    return (
        <><div className="d-flex">
            <div className="side-bar-container">
                <MainSidebar />
            </div>
            <div className="outlet-container">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default MainLayout