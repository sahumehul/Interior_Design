import React, { Component } from 'react';
import chair from "../img/chair.jpg";

export class News extends Component {
  render() {
    return (
      <div>
         <section className="news">
          <div className="container-fluid">
            <div className="row">
              <h5 className="text-center">NEWS</h5>
              <p className="event text-center">LATEST EVENTS</p>
            </div>

            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <img
                  src={chair}
                  className="img-thumbnail"
                  alt="chair"
                  style={{ width: "100%", height: "70%" }}
                />
                <div className='sept14'>September 14</div>
              </div>
              
              <div className="col-md-4">
          <p>
            <div className='n_head1'>IN A NUMBER OF RECENT JUCIDIAL</div>
            <div className='date1'>12.09.2018</div>
            <div className='para1'>                  Is we miles ready bemight going.Own books built put civil
                  fully blind fanny.Project appearance at of admiration no.As he
                  totally cousins warrant besides ashamed do.Therefore by
                  applauded acuteness sup-ported affection it. Except had sex
                  limit country enough the figure former add.Do sang my he next
                  mr soon.</div>
                  <a href='#' className='more'>More</a>

            <div className='n_head2'>SPECIAL ATTENTION</div>
            <div className='date2'>12.09.2018</div>
            <div className='para2'>
                  Admiration we surrounded possession frequently be.Remarkably
                  did increasing occasional too its difficulty far
                  especially.Known tiled but sorry joy bails. Bed sudden manner
                  indeed fat now feebly.Therefore by applauded acuteness
                  supported affection it.</div>
                  <a href='#' className='more' style={{marginTop:"20px"}}>More</a>
          </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default News