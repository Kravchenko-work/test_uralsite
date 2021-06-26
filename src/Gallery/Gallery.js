import React, { Component } from 'react'
import Gallery_item from './Gallery__item';


let name1 = "Страхование путешествия зарубеж";
let text1 = "Мы предлагаем за 5 минут застраховать загородный дом от пожара, взрыва газа, затопления и других опасных природных явлений";
let img1 = "https://uralsibins.ru/upload/iblock/ea9/ea97c63f535da2605a1fe46770711848.jpg";
let name2 = "Страхование путешествия по Шенгену";
let text2 = "Мы предлагаем за 5 минут застраховать загородный дом от пожара, взрыва газа, затопления и других опасных природных явлений";
let img2 = "https://uralsibins.ru/upload/iblock/842/842fd6b014ea745907bb7f7b54d005e5.jpg";
let name3 = "Страхование путешествия по России";
let text3 = "Мы предлагаем за 5 минут застраховать загородный дом от пожара, взрыва газа, затопления и других опасных природных явлений";
let img3 = "https://uralsibins.ru/upload/iblock/1d4/1d45c9cd502ec82da5d89b486c5ced91.png";
export default class Gallery extends Component {
	render() {
		return (
			<div className="gallery">
				<Gallery_item name={name1} img={img1} text={text1} />
				<Gallery_item name={name2} img={img2} text={text2} />
				<Gallery_item name={name3} img={img3} text={text3} />
			</div>
		)
	}
}
