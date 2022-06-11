import React from 'react';
import "./Heropage.css";

import img2 from './images/mine.png'

export default function Heropage(){
    return(
        <div className="heropage">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                <h1 className='intro'>
                Hello, I'm <span class="animate-charcter">Saitore Virginia</span>. <br />  A Front-End Developer!
                
                </h1>
                
                 <br />  <br /> <br /> 
                <button>
                    Check my work
                </button>
               
               
                </div>
                <div className="col-md-6">
                🍂 <img src={img2} alt="mine" className='img-responsive mine'/>🍂
                </div>
            </div>
            </div>
            
            
       
        </div>
    )
}