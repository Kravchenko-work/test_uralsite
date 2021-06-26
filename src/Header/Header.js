import React, { Component } from 'react'
import Topmenu from './Topmenu/Topmenu'
import Mainmenu from './Mainmenu/Mainmenu'



export default class Header extends Component {
	render() {
		return (
			<header>
				<Topmenu />
				<Mainmenu />
			</header>

		)
	}
}
