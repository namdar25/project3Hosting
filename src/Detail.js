import React, { Component } from 'react';
import {CameraList} from './CameraList.js';

//displays information about the rover as well as calling the cameralist class to render for a specific rover

export class Detail extends Component {
	constructor(props) {
        super(props);
        this.state = {
        }
    }
	
	render() {
	if(this.props.rover){
		return (
			<div>
				<div className="RoverCard">
					<h2>
					{this.props.rover.name}
					</h2>
					<table className="table-striped">
						<tbody>
							<tr>
								<th>Description</th>
								<th>Value</th> 
							</tr>
							<tr>
								<td>Rover Launch Date</td>
								<td>{this.props.rover.launch_date}</td> 
							</tr>
							<tr>
								<td>Rover Landing Date</td>
								<td>{this.props.rover.landing_date}</td> 
							</tr>
							<tr>
								<td>Total # Of Days</td>
								<td>{this.props.rover.max_sol}</td> 
							</tr>
							<tr>
								<td># Of Photos Taken By Rover</td>
								<td>{this.props.rover.total_photos}</td> 
							</tr>
						</tbody>
					</table>



				</div>
				<CameraList rover = {this.props.rover} />
			</div>)
		}
	return;
	}
}