import React, { Component } from "react";
import HeaderImage from "../img/th.jpg";
export class Header extends Component {
  render() {
    return (
      <header>
      <div
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "80px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{cursor: "pointer"}}>Mr. GOPNOVE </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "18%",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <a
              style={{
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              MAIN
            </a>
            <a
              style={{
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              GALLARY
            </a>
            <a
              style={{
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              ABOUT
            </a>
            <a
              style={{
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              CONTACT
            </a>
          </div>
          <div style={{cursor: "pointer"}}>8(800)987-65-43</div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "400px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column",width:"300px" }}>
              <p style={{ fontSize: "41px",margin:"2px" }}>INTERIOR IN YOUR HOUSE</p>
              <p style={{ fontSize: "12px",letterSpacing:"2",fontWeight:"lighter" }}>CHOOSE FOR YOURSELF SOMETHING NEW</p>
              {/* <button type="button" className="HeaderLink" style={{fontSize: "13px", width:"150px", backgroundColor: "rgb(247,188,88)",padding:"10px",textAlign:"center",color:"rgb(245,245,245)",cursor: "pointer"}}>More</button> */}
              <button type="button" class="HeaderLink">
                  MORE
                </button>
            </div>
          </div>
        </div>
      </div>
      </header>
    );
  }
}

export default Header;
