import { auth } from '../services/firebase'

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new auth.GoogleAuthProvider()
        auth().signInWithPopup(provider)
    }
    return (
     <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

export default SignIn
