import { Col, Container, Row } from "react-bootstrap"
import MainSidebar from "../../MainSidebar/MainSidebar"

const MainLayout = ({ children }) => {
    return (
        <>
            <MainSidebar />
            {children}
        </>
    )
}

export default MainLayout