import { connect } from "react-redux"
import AccountSummary from "./AccountSummary"
import { bindActionCreators } from "redux"

const stateToProps = state => ({

});

const dispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(stateToProps, dispatchToProps)(AccountSummary);