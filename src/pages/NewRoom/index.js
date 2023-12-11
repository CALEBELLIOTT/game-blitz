import { connect } from "react-redux"
import NewRoom from "./NewRoom.jsx"
import { bindActionCreators } from "redux"
import { setIsGuest } from "../../actions/index.js";
import { getIsGuest } from "../../selectors/users.js";

const stateToProps = state => ({
    isGuest: getIsGuest(state)
});

const dispatchToProps = dispatch => bindActionCreators({
    setIsGuest
}, dispatch);

export default connect(stateToProps, dispatchToProps)(NewRoom);