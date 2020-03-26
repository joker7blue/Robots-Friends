import React from 'react'


const searchBar = (props) => {

	return (

		<form class="tc">
		    <input id="name" class="input-reset ba b--black-20 pa3" placeholder="Search your robot friend" type="text" aria-describedby="name-desc" onChange={props.searchTyping}/>
		</form>
	)
}

export default searchBar