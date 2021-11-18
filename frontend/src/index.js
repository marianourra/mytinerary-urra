import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Bgvideo from "./video.mp4";
import Home from './pages/Home'


ReactDOM.render(
  <div class="principal">
  
  <div>
        <video className="video" autoplay="autoplay" loop="loop" muted>
        <source src={Bgvideo} type ="video/mp4" />
        </video>
      </div> 

  <Home />
  
  
  </div>,
  document.getElementById('root')
);

