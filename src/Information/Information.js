import React, { Component } from 'react';
import './Information.css';

export default class Information extends Component {
	render() {
		return (
			<div className="information__inner">
				<div className="container">
					<div className="information">

						<div className="information__title__grid">
							<h1 className="information__title">
								Для чего нужно страхование туристов, выезжающих за рубеж?
							</h1>
						</div>

						<div className="information__text">
							<p className="information__text-item">
								Оплата медицинских расходов. Если вы заболели или с вами произошел несчастный случай во время поездки, наличие полиса для выезжающих за рубеж или путешествующих по России позволит вам получить качественное лечение в месте вашего пребывания. Страховой полис за границей помогает сэкономить: визит к терапевту за рубежом может обойтись в несколько сотен долларов, а страховка покроет эти расходы. В случае непредвиденных обстоятельств страховой полис выручит и в поездках по России.
							</p>
							<p className="information__text-item">
								Решение организационных вопросов.Без оформления страхового полиса невозможно получить визу в десятки стран мира.В пакет обязательных документов для шенгенской визы входит полис ВЗР.
							</p>
							<p className="information__text-item">
								Страхование гражданской ответственности.По полису возможно возмещение ущерба и вреда, причиненного третьим лицам
							</p>
						</div>
						<div className="information__articles">
							<div className="information__link__inner">
								<a className="information__link">Для чего нужно страхование туристов?</a>
								<a className="information__link">Какую программу страхования туристов онлайн выбрать?</a>
								<a className="information__link">Часто задаваемые вопросы</a>
							</div>
						</div>
					</div>


				</div>

			</div>
		)
	}
}



