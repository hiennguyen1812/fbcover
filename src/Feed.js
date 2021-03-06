import React, {useEffect, useState} from 'react'
import "./Feed.css"
import ngoc from "./img/ngoc.jpg"
import hien from "./img/hien.jpg" 
import ha2 from "./img/ha2.jpg"
import StoryReel from "./StoryReel";
import Post from './Post';
import MessageSender from "./MessageSender";
import db from "./firebase"


const Feed = () => {
	const [posts, setPosts] = useState([])

	useEffect(()=> {
		db.collection('posts')
		.orderBy("timestamp","desc")
		.onSnapshot(snapshot => (
			setPosts(snapshot.docs.map(doc => ({
				id: doc.id, data: doc.data()
			})))
		))
	},[])

	return (
		<div className="feed">
			<StoryReel />
			<MessageSender/>
			{posts.map((post) => (
				<Post
				key={post.id}
				profilePic={post.data.profilePic}
				message={post.data.message}
				timestamp={post.data.timestamp}
				username={post.data.username}
				image={post.data.image}
				/>
			))}
		</div>
	)
}

export default Feed