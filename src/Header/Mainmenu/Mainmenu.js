import React, { Component } from 'react';
import './Mainmenu.css';


export default class Mainmenu extends Component {
	render() {
		return (
			<div className="header__mainmenu__inner">
				<div className="header__mainmenu">
					<div className="mainmenu__left">
						<img src="https://uralsibins.ru/static/media/uralsib-logo-blue.010fc34b.svg" />
					</div>
					<div className="mainmenu__center">
						<div className="mainmenu__item">Виды страхования</div>
						<div className="mainmenu__item">Сервисы и платежи</div>
						<div className="mainmenu__item">Страховой случай</div>
					</div>
					<div className="mainmenu__right">
						<div className="mainmenu__login">
							Войти
						</div>
						<div className="mainmenu__search">
							<img src="https://uralsibins.ru/static/media/search-blue.d7c5d549.svg" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
