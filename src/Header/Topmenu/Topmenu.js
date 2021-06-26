import React, { Component } from 'react'
import './Topmenu.css'
import Topmenu__item from './Topmenu__item.js';

export default class Topmenu extends Component {
	render() {
		return (
			<div>
				<div className="topmenu__inner">
					<div className="topmenu">
						<div className="topmenuMenuLeft">
							<Topmenu__item name="Частным клиентам" underline="topmenu__underline" />
							<Topmenu__item name="Бизнесу" />
							<Topmenu__item name="Партнёрам" />
						</div>
						<div className="topmenuMenuRight">
							<Topmenu__item name="О компании" />
							<Topmenu__item name="Пресс-центр" />
							<Topmenu__item name="Офисы" />
							<Topmenu__item name="Москва" icon="topmenu__icon" />
							<a className="topmenu__item topmenu__phone" href="tel:88002347755">8 800 234-77-55</a>
							<div className="topmenu__circle__inner">
								<span className="topmenu__circle">SOS</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
