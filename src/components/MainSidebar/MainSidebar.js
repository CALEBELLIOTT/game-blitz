import { useState, react } from "react"
import { Col, Row } from "react-bootstrap"
import './mainSidebar.css'
import { SIDEBAR_ROUTES as sidebarRoutes } from '../../lib/enums'
const MainSidebar = () => {
    const [selected, setSelected] = useState()
    const renderListItem = ({ name, icon, id }) => {
        return (
            <div className="d-flex justify-content-around align-items-center mt-2">

            </div>
        )
    }
    return (
        <div className="sidebar-main d-flex flex-column align-items-center">
            <div className="upper-content-container ">
                <h2>
                    C
                </h2>
            </div>
            <div>
                {sidebarRoutes.map(route => renderListItem(route))}
            </div>
        </div>
    )
}


export default MainSidebar

