import React, { Component } from 'react';


import Days from "./Days.js"




class App extends Component {


  render() {


    var dayStyle= {
      display: "inline-block",
          margin: 20,
          height: 300,
          width: 200,
          padding: 0,
          backgroundColor: "#FFF",
          WebKitFilter: "drop-shadow(0px 0px 5px #555)",
          filter: "drop-shadow(0px 0px 5px #555)"
  }

    return (

      <section style={dayStyle}>
      <Days/>


      </section>


    );
  }


}





export default App;
