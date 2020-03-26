import React from 'react'
import RobotCard from './RobotCard/RobotCard.js'

const robotCardList = (props) => {

	let robotsList = props.robots.map((robot, index) => {

	 	return <RobotCard key={robot.name} 
						  name={robot.name}
						  email={robot.email} 
						  robotClick={props.robotClick} />
	});

	return (
		<div className="tc mt5">
		{robotsList}
		</div>
	)
}


export default robotCardList