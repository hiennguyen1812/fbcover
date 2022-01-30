import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import hien from "./img/hien.jpg"
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import "./MessageSender.css"
import db from "./firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useStateValue } from "./StateProvider"

function MessageSender() {
	const[input, setInput] = useState("")
	const [imageUrl, setImageUrl] = useState("")
	const [{user}, dispatch] = useStateValue()
	const handleSubmit = (e) => {
		e.preventDefault()

		db.collection('posts').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profileSrc: user.photoURL,
			username: user.displayName,
			image: imageUrl,
		})
	setInput("")
	setImageUrl("")

	}
	

  return (<div className="messageSender">
	  <div className="messageSender-top">
		  <Avatar src={user.photoURL} />
		  <form>
			  <input
			  value={input} onChange={(e) => setInput(e.target.value)}
			  className="messageSender-input"
			  placeholder={`Bạn đang nghĩ gì, ${user.displayName}?`}
			  />
			  <input 
			 value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
			  placeholder="Tải lên ảnh" />

			  <button onClick={handleSubmit}
			  type="submit"
			  >Hidden submit</button>
		  </form>
	  </div>
	  <div className="messageSender-bottom">
		  <div className="messageSender-option">
			<VideocamIcon style={{color:"red"}} />
			<h3>Video trực tiếp</h3>
		  </div>
		  <div className="messageSender-option">
			<PhotoLibraryIcon style={{color:"green"}} />
			<h3>Ảnh/video</h3>
		  </div>
		   <div className="messageSender-option">
			<InsertEmoticonIcon style={{color:"orange"}} />
			<h3>Cảm xúc/Hoạt động</h3>
		  </div>
		   
	  </div>
  </div>)
}

export default MessageSender;
