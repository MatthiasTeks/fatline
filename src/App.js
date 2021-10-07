import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { SiInstagram } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';

import Button from './components/Button'
import Menu from './components/Menu'
import Fatline from './components/Fatline';
import Arrow from './components/Arrow'
import Slider from './components/Carousel';
import VerticalFont from './components/VerticalFont';

import ContactForm from './pages/Contact';
import About from './pages/About'

import Background from './assets/Tree.mp4'

import './style.css';
import 'normalize.css'; 



function App() {
  
  return (
    <Router>
      <div className="app">
        <div className="background"><video loop autoPlay muted src={Background}/></div>
        <div className="main">
          <div className="content">
            <Switch>
              <Route exact path="/FatlineTattooClub/">           
                <Menu styleMenu="inactive" />         
                <div className="welcome">
                  <h1>FATLINE TATTOO CLUB</h1>
                  <h3>HORI KI STUDIO - ELECTRIC TEBORI - 3 RUE BERTHELOT - 33000 BORDEAUX</h3>
                  <Link to="/about"><Button textBtn="PLUS D'INFOS"/></Link>                
                </div>
              </Route>  
              <Route path="/about">
                <div className="header">
                  <Link to="/FatlineTattooClub/"><Fatline /></Link>
                  <Menu styleMenu="menu"/>
                </div>
                <About />
                <Link to="/portfolio"><Arrow nextName='PORTFOLIO'/></Link>
              </Route>
              <Route path="/portfolio">
                <div className="header">
                  <Link to="/FatlineTattooClub/"><Fatline /></Link>
                  <Menu styleMenu="menu"/>
                </div>
                <div className="rowPortfolio">
                  <VerticalFont direction="leftFont" textVertical="IREZUMI" /> 
                  <div className="holderSlider">
                    <Slider />
                  </div>
                  <VerticalFont direction="rightFont" textVertical="タトゥー" /> 
                </div>
                  <Link to="/contact"><Arrow nextName='CONTACT'/></Link>
              </Route>
              <Route path="/contact">
                <div className="header">
                  <Link to="/FatlineTattooClub/"><Fatline /></Link>
                  <Menu styleMenu="menu"/>
                </div>
                <ContactForm />
              </Route>
            </Switch>
            <div className="social">
              <div className="welcome active">
                <Button styleBtn="socialLink" textBtn={<SiInstagram />}/>
                <Button styleBtn="socialLink" textBtn={<SiFacebook />}/> 
               </div>
            </div>
          </div> 
        </div>
      </div>
    </Router>
  );
}

export default App;
