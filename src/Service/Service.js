import React, { Component } from 'react';
import './Service.css';

export default class Service extends Component {
	render() {
		return (
			<div className="service__inner">
				<div className="service__line"></div>
				<div className="service container">
					<p className="service__title__1">Рассчитайте полис на сайте</p>
					<div className="service__pointer"></div>
					<p className="service__title__2">Оплатите удобным способом</p>
					<div className="service__pointer"></div>
					<p className="service__title__3">Получите полис по электронной почте</p>
				</div>
			</div>
		)
	}
}
