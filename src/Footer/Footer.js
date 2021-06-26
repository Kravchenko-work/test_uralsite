import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer__inner">
				<div className="footer-main">
					<div className="footer-main__flex">
						<div className="footer-main__col">
							<p className="footer-main__tel"><a tel="tel:+88002347755">8 800 234-77-55</a></p>
							<p className="footer-main__mail"><a>in@uralsibin.ru</a></p>
							<p className="footer-main__adress">117342, Москва, ул. Профсоюзная, д.65, корпус 1</p>
							<div className="footer-main__img">
								<div className="footer-main__facebook"></div>
								<div className="footer-main__vkontakte"></div>
							</div>
						</div>
						<div className="footer-main__col">
							<h1 className="footer-main__title">Частным клиентам</h1>
							<p className="footer-main__item"><a>Квартира</a></p>
							<p className="footer-main__item"><a>Ипотечное страхование</a></p>
							<p className="footer-main__item"><a>Несчастный случай</a></p>
							<p className="footer-main__item"><a>Антиклещ</a></p>
							<p className="footer-main__item"><a>Путешествие</a></p>
							<p className="footer-main__item"><a>ответственность</a></p>
						</div>
						<div className="footer-main_col">
							<h1 className="footer-main__title">Компания</h1>
							<p className="footer-main__item"><a>Раскрытая информация</a></p>
							<p className="footer-main__item"><a>Правила страхования</a></p>
							<p className="footer-main__item"><a>О нас</a></p>
							<p className="footer-main__item"><a>Компанда</a></p>
							<p className="footer-main__item"><a>Вакансии</a></p>
							<p className="footer-main__item"><a>Контакты</a></p>
						</div>
						<div className="footer-main_col">
							<h1 className="footer-main__title">Пресс-центр</h1>
							<p className="footer-main__item"><a>Блог-новости</a></p>
							<p className="footer-main__item"><a>Новости</a></p>
							<p className="footer-main__item footer-main__buy"><a>Как купить</a></p>
						</div>
					</div>
				</div>
				<div className="footer-bottom__inner">
					<div className="footer-bottom">
						<div className="footer-bottom__item">&#169; 2005-2018 СК "Уралсиб страхование"</div>
						<div className="footer-bottom__item">Карта сайта</div>
						<div className="footer-bottom__item "><span className="footer-bottom__logo">Сделано в</span></div>
					</div>
				</div>
			</footer>
		)
	}
}
