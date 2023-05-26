import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";

class AuthService {
  async loginWithEmailAndPassword({ email, password }) {
    let error;
    const res = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        return userCredential
      })
      .catch((err) => {
        console.error(err.message)
        error = { error: true, message: err.message }
      })
    return error ? error : res
  }
}

export const authService = new AuthService()