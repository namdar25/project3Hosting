import React, { Component } from 'react';
import {RoverButton} from './RoverButton.js';
import {Detail} from './Detail';

//class that manages the list of rover buttons and rendrs a Detail class base off of a rover

export class RoverButtonList extends Component {
	constructor(props) {
        super(props);
		this.state = { rover : '' };
		this.updateDetail = this.updateDetail.bind(this)
    }

	updateDetail(rover){
		this.setState({ rover })

	}

	renderDetail() {
		if(this.state.rover) {
				return(
					<div className="Detail">
						<Detail rover= {this.state.rover} />
					</div>	
		);
		}
		return(
		<div className="Detail">
			<div className="RoverCard"> 
				<h2>
					Choose a rover!
				</h2>
				<div className="CameraSwitcher">
				</div>
				<div className="carousel">
				</div>
			</div>
		</div>
		)
	}

	render() {
		console.log("ButtonListIsRendering", this.props.rovers);
		return (
		<div className="MasterDetail">
			<div className="Master">
				<h3>
				Rovers
				</h3>
				{
				this.props.rovers.map((x) => {
					return<RoverButton key={"item-" + x.id} info={x} updateDetail = {this.updateDetail}/>
				})
			}
			</div>
				{this.renderDetail()}
		</div>)
	}
}