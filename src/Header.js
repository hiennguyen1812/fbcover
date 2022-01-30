import React  from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ForumIcon from '@material-ui/icons/Forum';
import StorefrontIcon from '@material-ui/icons/Storefront';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import "./Header.css"
import hien from "./img/hien.jpg"
import { Avatar, IconButton } from '@material-ui/core';
import ExpanMoreToggle from './toggle/ExpanMoreToggle';
import {useStateValue} from "./StateProvider"


const Header = () => {
	const [{user}, dispatch ] = useStateValue()
	const userSettings = document.querySelector(".user-settings")
	// const userSettingToggle = userSettings.classList.toggle("user-setting-showup-toggle")
	// const toggle = 
	return (
		<div className='header'>
			<div className='header-left'>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
				alt=""
				/>
				<div className="header-input">
					<SearchIcon/>
					<input placeholder='Search Facebook' type="text" />
				</div>
				
			</div>
			<div className='header-center'>
				<div className="header-option header-option--active">
					<HomeIcon fontSize="60px" />
				</div>

				<div className="header-option">
					<FlagIcon fontSize="60px" />
				</div>

				<div className="header-option">
					<SubscriptionsIcon fontSize="60px" />
				</div>

				<div className="header-option">
					<StorefrontIcon fontSize="60px" />
				</div>

				<div className="header-option">
					<SupervisedUserCircleIcon fontSize="60px" />
				</div>
			</div>
			<div className='header-right'>
				<div className="header-info">
					<Avatar src={user.photoURL}/>
					<h4>{user.displayName}</h4>
				</div>

				<IconButton>
					<AppsIcon />
				</IconButton>
				<IconButton>
					<ForumIcon/>
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon/>
				</IconButton>
				<IconButton>
					<ExpandMoreIcon 
					// onClick={userSettingToggle} 
					/>
				</IconButton>
				<ExpanMoreToggle />
			</div>
		</div>
	)
}

export default Header