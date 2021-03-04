import React from 'react'
import { auth } from '../services/firebase'



function ChatMessage({message}) {
   
    const { text, uid, photoURL, displayName } = message

  

    const messageClass = uid === auth().currentUser.uid ? 'sent' : 'received'

    return (
        <div className="container">
           
            <div className="message-content">
                <div className={`message ${messageClass}`}>
                <p className="p-message">{text}</p>
                <p className="by">{ displayName }</p>
            </div>
           
            <img className="avatar" src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png" alt="User_photo"/>
            
        </div>
        </div>




       
    )
}

export default ChatMessage
