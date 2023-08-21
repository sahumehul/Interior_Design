import React from "react";
// import ReactDOM from 'react-dom/client';
import "./App.css"
import Header from "./Pages/Header";
import Footer from "./Pages/footer"
import AboutPage from "./Pages/AboutPage";
import Services from "./Pages/Services";
import News from "./Pages/News";
import SignUpPage from "./Pages/SignUpPage";

class App extends React.Component {
  render() {
   return(
    <>
    {/* Header page component */}
    <Header/>
    {/* About Page compoonent */}
    <AboutPage/>
    {/* Services page component */}
    <Services/>
    {/* News page component */}
    <News/>
    {/* SignUpPage Component */}
    <SignUpPage/>
    {/* Footer */}
    <Footer />
    </>
   )
  }
}

export default App;