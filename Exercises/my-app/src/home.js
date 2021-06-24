import React, { Component } from "react";
import image1 from './images/img1.jpg';
import './App.css';



export default  class Contact extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}
  

render() {
	  
  return (
  <div>


     <ul>
            <li className="nav"><a href="home.html"><span></span>Home</a></li>
            <li className="nav"><a href="news.html">News</a></li>
            <li className="nav"><a href="contact.html">Contact</a></li>
            <li className="nav" style="float:right"><a className="active" href="#about">About</a></li>
        </ul> 
  
    <div id="home" className="main_box">
            <h1>Welcome to My website</h1>
            <img src={image1} alt="image" className="img_frame img_float_l" />
            <p>
                <em>
                    <strong className="b">Tourisim</strong> 
                is travel for pleasure or business; 
                also the theory and practice of touring,
                the business of attracting, accommodating,
                and entertaining tourists, and the business 
                of operating tours. The World Tourism Organization 
                defines tourism more generally, in terms which go 
                "beyond the common perception of tourism as being 
                limited to holiday activity only", as people
                "traveling to and staying in places outside 
                their usual environment for not more than one 
                consecutive year for leisure and not less than
                24 hours, business and other purposes" 
                </em>
            </p>
       

  <p align="justify">
      The tourism industry, as part of the 
    service sector, has become an important source of income for 
    many regions and even for entire countries. The Manila Declaration 
    on World Tourism of 1980 recognized its importance as "an activity 
    essential to the life of nations because of its direct effects on 
    the social, cultural, educational, and economic sectors of national
     societies, and on their international relations.</p> 
     <div className="cleaner h40"></div>
    <div className="col_12 float_l">
        <h2>What We Do</h2>
        <p id= "list">
            Have a good website
            Offer online booking and payment
            Consider selling your product through an online travel agency
            Be present and active on social media
            Collaborate with bloggers, news and/or travel
             writers and stakeholders in your region
             <li/>
        </p>
    </div> 


 <div class="col_12 float_r">
        <h2>Purpose</h2>
        <blockquote>
            <p>Tourism promotes (advertises)
                your city/country and helps raise
                 money for your city, by tourists 
                 spending money to site-see, buy food, 
                 purchase gifts or stay in lodgings. 
                 Tourism also provides jobs for people. 
                 People are needed to provide tourists
                  all that food, drink, transportation, 
                  gifts, souvenirs and lodging.</p>
        </blockquote>
    
</div>
</div>

</div>
);

}
}



