import React, { useState, useEffect } from 'react'
import firebase, { auth, db } from '../services/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage'

function Chat() {
    const messagesRef = db.collection('messages')
    const query = messagesRef.orderBy('createdAt').limitToLast(25)

    const [messages] = useCollectionData(query, {idField: 'id'})
    const [formValue, setFormValue] = useState ('')

    const sendMessage = async (e) => {
        e.preventDefault()

        const {uid, photoURL, displayName } = auth().currentUser

        await messagesRef.add({
            text:formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid, photoURL, displayName
        })

        setFormValue()
    }

    return (
        <>
            <main>
                {messages && messages.map((msg)=>
                    <ChatMessage key={msg.id} message={msg} />
                )}
            </main>
            <form onSubmit={sendMessage}>
                <input className="input" type="text" value={formValue} onChange={(e)=> setFormValue(e.target.value)} placeholder="Say something..."/>
                <button type="submit" disabled={!formValue} className="submit">Send !</button>

            </form>
       </>
    )
}

export default Chat
