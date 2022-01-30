import React from 'react'
import './Sidebar.css';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import hien from "./img/hien.jpg" 
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';
import "./Sidebar.css"
import SidebarRow from './SidebarRow.js';
import {useStateValue} from "./StateProvider"


const Sidebar = () => {
	const [{user}, dispatch] = useStateValue()
	return (
		<div className="sidebar">
			<SidebarRow src={user.photoURL}
			title={user.displayName}
			/>
			<SidebarRow 
			Icon={LocalHospitalIcon}
			title="News today"
			/>
			<SidebarRow 
			Icon={EmojiFlagsIcon} title="Pages"
			/>
			<SidebarRow 
			Icon={PeopleIcon} title="Friends"
			/>
			<SidebarRow
			Icon={ChatIcon} title="Messenger" />
			<SidebarRow
			Icon={StorefrontIcon} title="Marketplace" />
			<SidebarRow
			Icon={VideoLibraryIcon} title="Videos" />
			<SidebarRow
			Icon={ExpandMoreOutlined} title="Xem them" />
		</div>
	)
}

export default Sidebar