import { Avatar } from '@material-ui/core';
import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ExpandMoreOutlined } from '@material-ui/icons';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import "./Post.css"
import {useStateValue} from "./StateProvider"


function Post({profilePic, image, username, timestamp, message}) {
	const [{user}, dispatch ] = useStateValue()
  return (<div className="post">
	<div className="post-top">
		<Avatar src={user.photoURL}
		className="post-avatar" />
		<div className="post-topInfo">
			<h3>{user.displayName}</h3>
			<p>{new Date(
				timestamp?.toDate()).toUTCString()
			}</p>
		</div>
	</div>
	<div className="post-bottom">
		<p>{message}</p>
	</div>
	<div className="post-img">
		<img src={image} alt="" />
	</div>

	<div className="post-options">
		<div className="post-option">
			<ThumbUpIcon />
			<p>Like</p>
		</div>
		<div className="post-option">
			<ChatBubbleOutlineIcon />
			<p>Comment</p>
		</div>
		<div className="post-option">
			<NearMeIcon />
			<p>Share</p>
		</div>
		<div className="post-option">
			<AccountCircleIcon />
			<ExpandMoreOutlined />
		</div>
	</div>
  </div>)
}

export default Post;
