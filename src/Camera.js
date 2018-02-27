import React, { Component } from 'react';

//Contians button that updates photos

export class Camera extends Component {
	constructor(props) {
        super(props);
		this.state = {
		images : []};
    }

	render() {
		if(this.state.images){
			return (
			<div className="cameraButton">
				<a href="#" className="btn btn-secondary" aria-label={this.props.camera.full_name} onClick={() => this.props.fetchImages(this.props.camera.name)}>
				{this.props.camera.name}
				</a>
			</div>
			)
		}
		return;
	}
}