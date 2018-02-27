import React, { Component } from 'react';
import styles from './scss/footer.scss'
import hire from '../../assets/homepage/sec2/hirework/hire_icon.png'
import logo from '../../assets/homepage/sec2/hirework/work_icon.png'
import sri from '../../assets/homepage/sec4/sri.png'
import rectangle from '../../assets/homepage/sec4/rectangle.png'
import map from '../../assets/homepage/sec3/map.png'
export default class Footer extends Component {
	render() {
		return (
			<div className="footer-container">
			<div className ="h3-tag">HOW IT WORKS</div>
			<br/>
			<div className = "h6-tag">Now create a profile and get hired by companies. Your opportunities are 3 steps away! </div>
			<div className="footer-box">
			<span className="image-footerbox">
			<img src={hire}/></span>
			<span className="image-footerbox">
			<img src={logo}/></span>
			</div>
			<br/>
			<div className ="h3-tag"> WHAT WE HAVE DONE SO FAR</div>
			<br/>
			<div className = "h6-tag">We have initialized about the new era of employment, we have created a trend! </div>
			<div className="section-2">
			<img src={map} alt="Image not Linked" width="450" height="450"/>
			<div classNaame="section2-text">
				<div className = "h3-tag">1280 </div>
				<br/>
				<div className="h6-tag"> Employee</div>
				<br/>
				<div className = "h3-tag">48636 </div>
				<br/>
				<div className="h6-tag"> Jobs</div>
				<br/>
				<div className = "h3-tag"> 8636</div>
				<br/>
				<div className="h6-tag">Job Seekers</div>
				<br/>
				<div className = "h3-tag"> 3.8 M</div>
				<br/>
				<div className="h6-tag">Rupee Paid</div>
				<br/>
			</div>
			</div>
			<br/>
			<br/>
			<div className ="h3-tag">WHAT DO PEOPLE WANT TO SAY </div>
			<br/>
			<div className = "h6-tag">Listen thousands of stories from our sucessful customers. We are proud to say that we have DONE IT! </div>
			<div className="avatars">
			<span className="avatar">
			<img src={rectangle} alt="Image not found" width ="90%" height="300px"/>
			</span>
			<span className="avatar-class" >
			<img src={sri} alt="Image not found" width ="300px" height="300px"/>
			</span>
			</div>
            </div>    
		)
	}
	
}

