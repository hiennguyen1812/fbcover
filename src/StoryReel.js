import React from 'react'
import Story from './Story'
import dihoi from "./img/dihoichup.jpg"
import hien from "./img/hien.jpg"
import khiquynh from "./img/khitreocay.jpeg"
import tkdeokinh from "./img/avadeokinh.jpg"
import avaGau from "./img/avagau.jpg"
import ava2congau from "./img/ava2congau.jpg"
import storyImg from "./img/story.jpg"
import storyVideo from "./img/story.mp4"
import "./StoryReel.css"

const StoryReel = () => {
	return (
		<div className="storyReel">
			<Story 
			image={storyImg}
			profileSrc={hien}
			title="Team"
			/>
			<Story image={dihoi}
			profileSrc={khiquynh}
			title="Khỉ"
			/>
			<Story image={storyImg}
			profileSrc={tkdeokinh}
			title="Avatar nam"
			/>
			<Story
			image ={dihoi} 
			profileSrc={avaGau}
			title="Avatar Động vật"
			/>
			<Story
			image ={storyImg} 
			profileSrc={ava2congau}
			title="Động vật 2"
			/>
			<Story
			image ={dihoi} 
			profileSrc={avaGau}
			title="New"
			/>
		</div>
	)
}

export default StoryReel