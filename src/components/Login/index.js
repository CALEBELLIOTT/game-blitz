import { connect } from "react-redux"
import {
  getUserData,
  getLoginError
} from '../../selectors/users'
import {
  setUser,
  // setLoginError,
  login
} from '../../actions'
import { Login } from "./Login"
import { bindActionCreators } from "redux"

const stateToProps = state => ({
  user: getUserData(state),
  loginError: getLoginError(state)
});

const dispatchToProps = dispatch => bindActionCreators({
  setUser,
  // setLoginError,
  login
}, dispatch);

export default connect(stateToProps, dispatchToProps)(Login);