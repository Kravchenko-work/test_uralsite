import React, { Component } from 'react';
import './Topmenu__item.css';

export default class Topmenu__item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
		}
	}
	render() {
		return (
			<div className="topmenu__item__inner">
				<a href="#" className={"topmenu__item " + this.props.underline + " " + this.props.icon}>
					{this.state.name}
				</a>
			</div>
		)
	}
}
