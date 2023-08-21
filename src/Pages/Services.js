import React, { Component } from 'react';
import dining from "../img/dining.jpg";
import wash from "../img/wash.jpg";
import study from "../img/study.jpg";

export class Services extends Component {
  render() {
    return (
      <div>
        <section className="services">
          <div className="container-fluid">
            <div className="row">
              <h5 className="text-center">SERVICES</h5>
              <p className="text-center">WE DO IT</p>
            </div>
            </div>
            <div className='container-fluid'>
            <div className="row">
              <div className="col-md-2" style={{color:"white"}}></div>
              <div className="col-md-1"></div>
              
              <div className="col-md-2">
              <img
                  src={dining}
                  className="img-thumbnail"
                  alt="dining"
                  style={{ width: "100%", height: "180px",marginRight:"10px" }}
                />
                <div class="overlay">
    <div class="text">Hello World</div>
  </div>
              </div>
                
              <div className="col-md-2">
              <img
                  src={study}
                  className="img-thumbnail"
                  alt="study"
                  style={{ width: "100%", height: "180px" }}
                />
                <div class="overlay">
    <div class="text">Hello World</div>
  </div>
              </div>
                
              <div className="col-md-2">
              <img
                  src={wash}
                  className="img-thumbnail"
                  alt="wash"
                  style={{ width: "100%", height: "180px" }}
                />
                <div class="overlay">
    <div class="text">Hello World</div>
  </div>
              </div>
                
                <div className='col-md-1'>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Services