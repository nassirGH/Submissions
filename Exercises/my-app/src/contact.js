
import React, { Component } from "react";
import './App.css';


export default  class Contact extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}
  
  
	render() {
	  
  
	  
	  return (
			<div id="contact" class="main_box">
				<ul>
					<li><a href="home.html"><span></span>Home</a></li>
					<li><a href="news.html">News</a></li>
					<li><a href="contact.html">Contact</a></li>
					<li ><a class="active" href="#about">About</a></li>
				</ul>
				<h1>Contact Us</h1>
				<p>Contact us pages. Everyone has them, needs them, but are you really paying attention to the strategy behind them?

				It’s true isn’t it? One of the most valuable pages on your website is usually an afterthought.
								
				It’s one of those things that has to be there, but often enough, you throw the necessary information on and leave it at that.</p>
				<div class="cleaner h30"></div>
				<div class="col_12 float_l">
					<h3 class="b">Quick Contact Form</h3>
					<div id="contact_form">
						<div>
							<form action="/action_page.php">
								<label for="fname" class="label">First Name</label>
								<input type="text" id="fname" name="firstname" placeholder="Your name.."/>
								<label for="lname"  class="label">Last Name</label>
								<input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
								<label for="phone"  class="label">Phone number</label>
								<input type="text" id="pnumber" name="phonenumber" placeholder="Your phone number.."/>
								<label for="email"  class="label">Email</label>
								<input type="text" id="email" name="email" placeholder="Your Email.."/>
								<label for="country"  class="label">Country</label>
								<select id="country" name="country">
									<option value="australia">Australia</option>
									<option value="canada">Canada</option>
									<option value="usa">USA</option>
									<option value="France">France</option>
									<option value="Lebanon" selected="true">Lebanon</option>
									<option value="Libya">Libya</option>
									<option value="Germany">Germany</option>
									<option value="Italy">Italy</option>
									<option value="Denemark">Denemark</option>
								</select>
								<input type="submit" value="Submit"/>
							</form>
						</div>
					</div> 
				</div>
								
				<div class="col_12 float_r">
					<h4>Our Location</h4>
					<iframe width="300" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/place/Gouraud,+Bayrut/data=!4m2!3m1!1s0x151f16faf9176eab:0x63c656a2e366e86b?sa=X&ved=2ahUKEwj4kMyWjfbmAhVRuHEKHTHYD_IQ8gEwAHoECAsQAQ;output=embed"></iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=EN&amp;q=time+square&amp;aq=&amp;sll=40.716558,-73.931122&amp;sspn=0.40438,1.056747&amp;ie=UTF8&amp;rq=1&amp;ev=p&amp;split=1&amp;radius=33.22&amp;hq=time+square&amp;hnear=&amp;ll=37.061753,-95.677185&amp;spn=0.438347,0.769043&amp;z=9"><br/><br/><h3>View Larger Map</h3></a></small>                
					<div class="cleaner h30"></div>
					<h4>Mailing Address</h4>
					<h4 >Nakhal Travelling Agency</h4><br/><br/>
					Main Office Du Parc building, Sami El Solh Avenue - Beirut
					<br/>
					<br/>
					<span>book your tours in Lebanon</span> 
					<br/>
					<br/>
					<br/>
					<b>Phone:</b> +961 3 234 747<br />
					<b>Email:</b> <a href="mailto:info@company.com">info@company.com</a> 
				</div>
			</div>
		);
  }
} 