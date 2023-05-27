import './mainSidebar.css'
import { SIDEBAR_ROUTES as sidebarRoutes } from '../../lib/enums'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import Login from "../Login";



const MainSidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const renderTooltip = ({ name }) => (
        <Tooltip>{name}</Tooltip>
    );

    const renderListItem = ({ name, icon, id, route }) => {
        const { pathname } = location
        const isSelected = pathname === `/${route}`
        return (
            <div key={id}>
                <OverlayTrigger placement="right" overlay={renderTooltip({ name })}>
                    < div
                        className={`selectable py-4 ${isSelected ? 'bg-primary' : ''}`}
                        onClick={() => {
                            navigate(`/${route}`)
                        }}
                        title={name}
                    >
                        <div className="d-flex justify-content-center">
                            <i
                                className={`${isSelected ? 'icon-active' : 'icon-inactive'} ${icon} router-icon`}
                            />
                        </div>
                    </div>
                </OverlayTrigger>
                <div className={!isSelected ? 'divider-line' : ''} />
            </div>
        )
    }


    return (
        <div className="sidebar-main bg-light">
            <div className="upper-content-container d-flex justify-content-center py-3">
                <Login></Login>
            </div>
            <div className="divider-line"></div>
            {sidebarRoutes.map(route => renderListItem(route))}
        </div>
    )
}


export default MainSidebar

