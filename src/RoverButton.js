import React, { Component } from 'react';

export class RoverButton extends Component {
	render() {
		return (
		<div className="roverButton">
			<button type="button" className="btn btn-primary" onClick={() => this.props.updateDetail(this.props.info)}>{this.props.info.name}</button>
		</div>
		)
	}
}