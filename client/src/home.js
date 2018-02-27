import React, { Component } from 'react';
import Footer from './components/footer/footer'
import Header from './components/header/header'
export default class Home extends Component {

	render() {
		console.log("home Page",this.props, "and its state is",this.state)
		return (
			<div>
				<Header/>
				<Footer/>
			</div>
		)
	}
	
}

