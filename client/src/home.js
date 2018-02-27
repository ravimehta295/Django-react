import React, { Component } from 'react';
import Footer from './components/footer/footer'

export default class Home extends Component {

	render() {
		console.log("home Page",this.props, "and its state is",this.state)
		return (
			<div>
			<h1>You Are Hired</h1>
			<Footer/>
			</div>
		)
	}
	
}

