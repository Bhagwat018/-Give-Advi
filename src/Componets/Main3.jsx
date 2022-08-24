import React, { Component } from 'react'
import axios from 'axios'
import './Main3.css'
export default class Main3 extends Component {
  state={ advice:' '}

componentDidMount(){

  this.fetchAdvice()
}
   


 fetchAdvice=()=>{
   axios.get("https://api.adviceslip.com/advice")
   .then((response)=>{
    const {advice} = response.data.slip
 this.setState({advice: advice})
   })
   .catch((error)=>{
   console.log(error)
   })

}
render() {
    const {advice}= this.state;
    return (
      <div>
        
        <div className="frist" id='frist'>
          <div className="secand">
            
 <div><h1>{advice}</h1> </div> 
<button onClick={this.fetchAdvice}  ><span>give me advice</span></button> 
  </div>
  
  </div>
        </div>
    )
  }
}
