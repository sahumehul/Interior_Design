import React, { Component } from 'react';
import lappy from "../img/lappy.jpg";

export class AboutPage extends Component {
  render() {
    return (

      <div>
         <section className="about">
          <div className="container-fluid">
            <div className="row">
              <h4 className="text-center">ABOUT COMPANY</h4>
              <p className="history text-center">SOME HISTORY</p>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <h3>- 1920</h3>
                <p>
                  Amet et delectus accomodare his consult copiosae legendos at
                  vix as putent detectus delicata usu.Vidit dissentiet eos cu
                  eum an brute copiosae hendrent.Eos erant dolorum an Per facer
                  affert ut.Mei lisque mentitum moderatus cu.
                </p>
                <h3>- 1986</h3>
                <p>
                  Amet et delectus accomodare his consult copiosae legendos at
                  vix as putent detectus delicata usu.Vidit dissentiet eos cu
                  eum an brute copiosae hendrent.Eos erant dolorum an Per facer
                  affert ut
                </p>
                <button type="button" class="btn_more">
                  MORE
                </button>
              </div>
              <div className="col-md-4">
                <img src={lappy}></img>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AboutPage