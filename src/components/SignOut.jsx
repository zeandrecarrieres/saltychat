import { auth } from '../services/firebase'



function SignOut() {
    return auth().currentUser && (
        
        <button onClick={()=> auth().signOut()} className="sign-out-btn">Sign Out!</button>
        
       
    )
}

export default SignOut
