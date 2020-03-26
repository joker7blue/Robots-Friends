import React, {Component} from 'react'
import RobotCardList from './RobotCardList/RobotCardList.js'
import SearchBar from './SearchBar/SearchBar.js'
import {robots} from "./robotsData.js"
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      robots: robots
    }
  }


  handleRobotClick = (event, robot) => {

    window.responsiveVoice.speak('I am a robot, my name is '+robot.name);
  }


  handleSearch = (event) => {

    const robotsFilter = robots.filter(robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase()))

    this.setState({ robots: robotsFilter })
  }


  render() {

    return (
      <div className="App App-header">

        <h1 className="tc normal mv5 title"> robotsfriends </h1>

        <SearchBar searchTyping={this.handleSearch} />

        <RobotCardList robots={this.state.robots} robotClick={this.handleRobotClick}/>

        <footer className="tc mv4 white f4">
          &copy; 2020 All rights reserved <br/>
          <span className="f5">Powered by <a target="blank" href="https://github.com/joker7blue" style={{color: "orange"}}>Joker7Blue</a></span>
        </footer>

      </div>
    )
  }

  
}

export default App
