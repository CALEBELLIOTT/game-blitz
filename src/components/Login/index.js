import { connect } from "react-redux"
import {
  getUserData,
  getLoginError
} from '../../selectors/users'
import {
  getInlineLoading
} from '../../selectors/app'
import {
  setUser,
  login
} from '../../actions'
import { Login } from "./Login"
import { bindActionCreators } from "redux"

const stateToProps = state => ({
  user: getUserData(state),
  loginError: getLoginError(state),
  inlineLoading: getInlineLoading(state)
});

const dispatchToProps = dispatch => bindActionCreators({
  setUser,
  login
}, dispatch);

export default connect(stateToProps, dispatchToProps)(Login);