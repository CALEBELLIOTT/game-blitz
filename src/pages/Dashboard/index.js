import { connect } from "react-redux"
import Dashboard from "./Dashboard"
import { bindActionCreators } from "redux"

const stateToProps = state => ({

});

const dispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(stateToProps, dispatchToProps)(Dashboard);