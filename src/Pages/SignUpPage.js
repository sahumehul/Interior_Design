// import React, { Component } from 'react';
// import chair from "../img/chair.jpg";

// export class SignUpPage extends Component {
//   render() {
//     return (
//       <div>
//         <section className="signup">
//           <div className="container-fluid">
//             <div className="row">
//               <h5 className="text-center">SIGNUP FOR COMPANY NEWS</h5>
//               <p className="text-center">
//                 YOU WILL RECEIVE NOTIFICATION ABOUT OUR NEW COMPANY NEWS
//               </p>
//               <p className="email text-center">
//                 <input
//                   type="text"
//                   className="mail"
//                   placeholder="E-mail"
//                 ></input>
//                 <button type="button" class="btn_sub">
//                   SUBSCRIBE
//                 </button>
//               </p>
//             </div>
//           </div>

//           <div className="container">
//             <div className="row">
//               <img
//                 src={chair}
//                 className="img-thumbnail"
//                 alt="chair"
//                 style={{ width: "18%", height: "70%",marginLeft:"10px" }}
//               />
//               <img
//                 src={chair}
//                 className="img-thumbnail"
//                 alt="chair"
//                 style={{ width: "18%", height: "70%",marginLeft:"10px" }}
//               />
//               <img
//                 src={chair}
//                 className="img-thumbnail"
//                 alt="chair"
//                 style={{ width: "18%", height: "70%",marginLeft:"10px" }}
//               />
//               <img
//                 src={chair}
//                 className="img-thumbnail"
//                 alt="chair"
//                 style={{ width: "18%", height: "70%",marginLeft:"10px" }}
//               />
//               <img
//                 src={chair}
//                 className="img-thumbnail"
//                 alt="chair"
//                 style={{ width: "18%", height: "70%",marginLeft:"10px" }}
//               />
//             </div>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }

// export default SignUpPage



import React, { Component } from "react";
import chair from "../img/chair.jpg";

export class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = { bottom: false };
  }

  scrollEvent () {

    //Logic to detect whether page is at it's end or not.
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 50
    ) {
      this.setState({bottom:true}) // if true, then height of SignUp section will cut off
    } else {
      this.setState({bottom:false}) // otherwise actual height.
    }
  }

  
  componentDidMount() {
    window.addEventListener("scroll",this.scrollEvent.bind(this)); // ScrollEvent will be called on scrollEvent
  }
  render() {
    return (
      <div>
        <section
          style={{ height: this.state.bottom ? "370px" : "540px" }}
          className="signup"
        >
          <div className="container-fluid">
            <div className="row">
              <h5 className="text-center">SIGNUP FOR COMPANY NEWS</h5>
              <p className="text-center">
                YOU WILL RECEIVE NOTIFICATION ABOUT OUR NEW COMPANY NEWS
              </p>
              <p className="email text-center">
                <input
                  type="text"
                  className="mail"
                  placeholder="E-mail"
                ></input>
                <button type="button" class="btn_sub">
                  SUBSCRIBE
                </button>
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <img
                src={chair}
                className="img-thumbnail"
                alt="chair"
                style={{ width: "18%", height: "70%", marginLeft: "10px" }}
              />
              <img
                src={chair}
                className="img-thumbnail"
                alt="chair"
                style={{ width: "18%", height: "70%", marginLeft: "10px" }}
              />
              <img
                src={chair}
                className="img-thumbnail"
                alt="chair"
                style={{ width: "18%", height: "70%", marginLeft: "10px" }}
              />
              <img
                src={chair}
                className="img-thumbnail"
                alt="chair"
                style={{ width: "18%", height: "70%", marginLeft: "10px" }}
              />
              <img
                src={chair}
                className="img-thumbnail"
                alt="chair"
                style={{ width: "18%", height: "70%", marginLeft: "10px" }}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SignUpPage;
