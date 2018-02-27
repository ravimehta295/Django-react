import React, { Component } from 'react';
import styles from './scss/header.scss'
import logo from '../../assets/homepage/sec1/logo.png'
import menu from '../../assets/homepage/sec1/menu.png'
import people from '../../assets/homepage/sec1/people_bg.png'
import man from '../../assets/homepage/sec1/person_icon.png'
export default class Header extends Component {

	render() {
		return (
			<div className="header-container">
				<div className="container"></div>
				<div className="header-items">
					<div className="logo"><img src={logo}/>  EffeJobs</div>
					<div className ="navBar"> 
					<div>
						<a href="/login">Login</a>
						<a href="/signup"> Signup</a>
					</div>
					<img src={menu}/>
					</div>
					<div className="container"></div>
					<div className="header">YOU ARE <br/>&nbsp;&nbsp;&nbsp;HIRED </div>
					<div className="header-text"> EffeJobs opens a new world for tommorow. We are exploring a culture of <br/>
					trust which essentially benificitial for the people to get a short term or long <br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;term income through jobs.
					</div>
				</div>
				<div className="searchbox">
				<form method="post" id="form1" autocomplete="on">
				<label> Job name
					<input type="text" name="name"/></label>
					<label> Location
					<input type="text" name="location" /></label>
				</form>
				<button className="btn" type="submit" form="form1" value="Submit">Search</button>
				</div>
				<div className="header-image">
				<img src={people}/>
				</div>
				<div className="container"></div>
            </div>
		)
	}
	
}

