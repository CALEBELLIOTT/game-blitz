import { connect } from "react-redux"
import Home from "./Home.jsx"
import { bindActionCreators } from "redux"
import { setIsGuest } from "../../actions/index.js";
import { getIsGuest } from "../../selectors/users.js";

const stateToProps = state => ({
  isGuest: getIsGuest(state)
});

const dispatchToProps = dispatch => bindActionCreators({
  setIsGuest
}, dispatch);

export default connect(stateToProps, dispatchToProps)(Home);