import React, { Component } from "react";
import img2 from './images/img2.jpg';
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
    <li className="nav" style="float:right"><a class="active" href="#about">About</a></li>
  </ul>
			<div id="about" className="main_box">
                <h1>Our Company</h1>
                <img src={img2} alt="image" className="img_float_r img_frame" />
                  <p><em><strong className="b">Tourisim</strong> 
                  management includes all the activities related 
                  to the tourism and hospitality industries. It
                   includes aspects of business administration 
                   and management, as well as travel industry
                    topics. ... Careers in tourism management 
                    include travel agents, travel guides, and
                     hotel or resort managers.</em></p>
                  <p>Tourism management is the oversight of
                       all activities related to the tourism 
                       and hospitality industries. It's a
                        multidisciplinary field that prepares
                         people with the interest, experience,
                          and training for management positions 
                          in the food, accommodations, and tourism 
                          industry. Tourism management might also 
                          include the enterprises, associations, 
                          and public authorities that market tourism 
                          services to potential travelers. </p>
                  <p>The idea of people traveling to destinations
                       away from their home for business or pleasure,
                        is a growing field with many opportunities.
                         For tourism professionals, these opportunities
                          include work in the facilities where tourists
                           stay as well as employment in the activities 
                           tourists undertake during these trips.
                            People embark on tourism for all kinds 
                            of reasons: to relax, to visit family, 
                            to take in new cultures, and as part of 
                            business and professional outings. As an
                            industry, tourism is important to development, 
                            growth, and economic potential. </p>
                  <div className="cleaner h40"></div>
                  <div className="col_12 float_l">
                  <h2>Three main business-related components</h2>
                      <blockquote>
                        <p>
                            Accessibility: Travel and transportation
                             arrangements, such as cars, public transit
                              options, cruise ships, trains, and airplanes
                            Accomedations:Hotels, motels, resorts, camping,
                             spaces, cabins, and much more
                        Attractions: Theme parks, historical sites,
                         or natural resources.
                          
                        </p>
                            
                      </blockquote>
                      
                  </div>
                  <div className="col_12 float_r">
                      <h3>Services</h3>
                      <ul className="tooplate_list">
                          <p>Travel agencies
                          Online travel agencies (OTAs)
                          Destination marketing organizations (DMOs)
                          Tour operators</p>
                      </ul>
                  </div>
                  <div className="cleaner"></div>
               
                  <div className="cleaner"></div>
              </div> 



</div>

    );
}
}

