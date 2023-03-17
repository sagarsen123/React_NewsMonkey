import React, { Component } from 'react'
import loadingBall from "../images/loading_ball.gif"

export class Loader extends Component {
  render() {
    return (
      <div className='container-xxl d-flex justify-content-center align-items-center'  style={{height:"40rem"}}><img src={loadingBall} alt="" /></div>
    )
  }
}

export default Loader