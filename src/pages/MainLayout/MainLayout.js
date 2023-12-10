import { Outlet } from "react-router";
import MainSidebar from "../../components/MainSidebar/MainSidebar"
import './MainLayout.css'
import React from "react";

const MainLayout = (props) => {
    return (
        <>
            <div className="d-flex">
                <div className="outlet-container">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout