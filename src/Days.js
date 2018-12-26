import React, { Component } from 'react';

import weatherData from "./weatherData.js"



class Days extends Component {
  constructor(props){
    super(props);
    this.state = {weather: weatherData}
  }


  render() {
    return(
      <section className="week">
        {
          this.state.weather.map((num,index) =>
         <div key={index}>
         {num.day}

         </div>
       )}
       </section>


      )

  }

}



export default Days;
