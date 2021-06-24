import React, { Component } from "react";
import './App.css';
import image1 from "../src/images/portfolio/01.jpg";
import image2 from "../src/images/portfolio/02.jpg";
import image3 from "../src/images/portfolio/03.jpg";
import image4 from "../src/images/portfolio/04.jpg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from "./contact";






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    

    
    return (
      <body>
       
      <div className="tooplate_wrapper">
        <div id="tooplate_sidebar">
          <div id="tooplate_menu">
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>

              <hr />
              <Switch>
                <Route exact path="/">
                 
                </Route>
                <Route path="/news">
                  
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
          </Router> 
			    </div>
        </div>
        <div id="portfolio" className="main_box">
				<h1>Our Portfolio</h1>
				<ul id="gallery">
					<li><a href="images/portfolio/01.jpg"><img  className="img" src={image1} alt="Image 01"  class="img_frame" /></a></li>
					<li><a href="images/portfolio/02.jpg"><img  className="img" src={image2} alt="Image 02"   class="img_frame" /></a></li>
					<li><a href="images/portfolio/03.jpg"><img  className="img" src={image3} alt="Image 03" class="img_frame" /></a></li>
					<li><a href="images/portfolio/04.jpg"><img  className="img" src={image4}  alt="Image 04" class="img_frame" /></a></li>              
				</ul>
				<div class="cleaner"></div>
				<a href="#tooplate_main" className="gototop">Go To Top</a>
				<div class="cleaner"></div>
			</div>
      <div class="cleaner"></div>
      </div></body>
     
  
    );
  }
}

 export default App;