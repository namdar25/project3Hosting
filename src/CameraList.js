import React, { Component } from 'react';
import {Camera} from './Camera.js';
import {Carousel} from './Carousel.js';
import {getRoverPictures} from './api.js';

//class holds a list of cameras for a specific rover

export class CameraList extends Component {
	constructor(props) {
        super(props);
		this.state = { 
		rover : '',
		sol : '1',
		images : []};
		this.fetchImages = this.fetchImages.bind(this)
    }

	fetchImages(camera){
	getRoverPictures(this.props.rover.name,this.state.sol,camera).then((res) => res.json()).then((data) => {
            this.setState({
                images: data.photos
            })
        });
	}

	renderCarousel() {
		if(this.state.images) {
			return(
			<div>
				<div className="photoContainer">
					{
						this.state.images.map((x) => {
							console.log('image',x);
							return<Carousel key={"item-" + x.id} photo = {x}/>
						})
					}
				</div>
			</div>	
			);
		}
		return;
	}
	
	handleChange(event) {
		let value = event.target.value;
		let field = event.target.name;
		let change = {};
		change[field] = value;
		this.setState(change);
    }

	render() {
		if(this.state.rover.name !== this.props.rover.name){
			this.setState({
			rover:this.props.rover,
			images: []})
		}
		console.log(this.props.rover);
		if(this.props.rover){
			return (
				<div>
					<div className="CameraSwitcher">
						<div className="form-group">
							<label>Day Of Trip:</label>
							<input className="form-control"
								name="sol"
								value={this.state.sol}
								onChange={(event) => { this.handleChange(event) }}
							/>
						</div>

						<div className="list-group">
						{
							this.props.rover.cameras.map((x) => {
								return<Camera key={"item-" + x.name} rover = {this.props.rover.name} camera={x} fetchImages = {this.fetchImages}/>
							})
						}
						</div>
					</div>
					{this.renderCarousel()}
				</div>
			);
		}
		return;
	}
}