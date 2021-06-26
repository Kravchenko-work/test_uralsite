import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {
	render() {
		return (
			<div className="container">
				<div className="navigation">
					<ul className="navigation__top">
						<li className="navigation__top-item"><a className="navigation__top-link" href="#">Частным клиентам</a></li>
						<li className="navigation__top-item"><a className="navigation__top-link" href="#">Виды страхования</a></li>
						<li className="navigation__top-item"><a className="navigation__top-link" href="#">Путешествия</a></li>
					</ul>
					<div className="navigation__main">
						<p className="navigation__title">Путешествия</p>
						<div className="navigation__content">
							<div className="navigation__text">
								Путешествуйте, открывайте мир, вдохновляйтесь на новые совершения, а мы возьмём на себя заботу о вашей безопасности. Страхование по программе "Открытый мир" - гарантированная защита вашего здоровья, где бы вы ни находились
							</div>
							<div className="navigation__calculator">
								<a className="navigation__link">Калькулятор</a>
							</div>
						</div>
					</div>
					<ul className="navigation__bottom">
						<li className="navigation__bottom-item"><a href="#">Продукты</a></li>
						<li className="navigation__bottom-item"><a href="#">Страховой случай</a></li>
					</ul>
				</div>
			</div>
		)
	}
}
