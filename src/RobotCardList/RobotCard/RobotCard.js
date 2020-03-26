import React from 'react'
import './robotCard.css'

const robotCard = (props) => {

	return (
		
		<div className="robot-card dib shadow-1 pa5 ma3 bg-light-green grow" onClick={(event) => props.robotClick(event, {name:props.name,email:props.email} )}>

			<img src={"https://robohash.org/"+props.name+"?size=200x200"} alt="robot"/>
			<h1>{props.name}</h1>
			<p>{props.email}</p>
		</div>
	)
}

export default robotCard