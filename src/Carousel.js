import React, { Component } from 'react';

//class is a photo for a specific camera

export class Carousel extends Component {
	render() {
		if(this.props.photo){
			return (
				<div className="photoItem">
					<img src={this.props.photo.img_src} alt={'Photo Taken By ' + this.props.photo.camera.full_name + ' On ' + this.props.photo.earth_date}></img>
				</div>
			)
		}
		return;
	}
}
