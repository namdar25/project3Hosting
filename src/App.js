import React, { Component } from 'react';
import {getRovers} from './api.js';
import {RoverButtonList} from './RoverButtonList.js';

//Base class that starts the application rendr tree

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rovers:[]
        }
    }

    componentWillMount() {
        getRovers().then((res) => res.json()).then((data) => {
            this.setState({
                rovers: data.rovers
            })
            console.log(data);
        });

    }

render() {
	return (
		<div className="App">
			<div className= "WholePage">
				<header className="App-header">
					<h1 className="App-title">Explore The Mars Rovers</h1>
				</header>
				<RoverButtonList rovers= {Object.values(this.state.rovers)}/>
				<footer>
					<div>
						<h4>
							By Shawn Namdar For Info 343
						</h4>
						<p>Photos From:<a herf="https://api.nasa.gov/planetary/apod?api_key=CIVXlQB6L717uhHZp0GLihzu9rU7gomgBrxfGXdw">https://api.nasa.gov/</a></p>
					</div>
			  </footer>
			</div>
		</div>
	);
  }
}

export default App;
