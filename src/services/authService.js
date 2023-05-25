import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";

class AuthService {
  loginWithEmailAndPassword({ email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}

export const authService = new AuthService()