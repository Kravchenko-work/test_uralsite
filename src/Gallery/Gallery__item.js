import React, { Component } from 'react';
import './Gallery__item.css';

export default class Gallery__item extends Component {

	render() {
		return (
			<div className="gallery__item container">
				<div className="gallery__picture">
					<img src={this.props.img} />
				</div>
				<div className="gallery__content">
					<div className="gallery__title">
						{this.props.name}
					</div>
					<div className="gallery__text">
						{this.props.text}
					</div>
					<div className="gallery__buttons">
						<a className="gallery__calculate" href="#">Рассчитать</a>
						<a className="gallery__more" href="#">Подробнее</a>
					</div>
				</div>
			</div>
		)
	}
}
