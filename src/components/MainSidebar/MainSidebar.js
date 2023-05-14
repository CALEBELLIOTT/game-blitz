import { useState, react } from "react"
import { Col, Row } from "react-bootstrap"
import './mainSidebar.css'
import { SIDEBAR_ROUTES as sidebarRoutes } from '../../lib/enums'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useNavigate } from "react-router-dom";



const MainSidebar = () => {
    const [selected, setSelected] = useState()
    const navigate = useNavigate()

    const renderTooltip = ({ name }) => (
        <Tooltip>{name}</Tooltip>
    );

    const renderListItem = ({ name, icon, id, route }) => {
        const isSelected = selected === id
        return (
            <div key={id}>
                <OverlayTrigger placement="right" overlay={renderTooltip({ name })}>
                    < div
                        className={`selectable py-4 ${isSelected ? 'bg-primary' : ''}`}
                        onClick={() => {
                            setSelected(id)
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
                <h2 className="mx-auto">
                    C
                </h2>
            </div>
            <div className="divider-line"></div>
            {sidebarRoutes.map(route => renderListItem(route))}
        </div>
    )
}


export default MainSidebar

