import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      let outSpeed
      if (prevState.speed < 200) {
        outSpeed = prevState.speed + 10
      } else if (prevState.speed === 200) {
        outSpeed = 200
      }
      return {speed: outSpeed}
    })
  }

  onBrake = () => {
    this.setState(prevState => {
      let outSpeed
      if (prevState.speed !== 0) {
        outSpeed = prevState.speed - 10
      } else if (prevState.speed === 0) {
        outSpeed = 0
      }
      return {speed: outSpeed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-heading">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            onClick={this.onAccelerate}
            className="accelerate"
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.onBrake} className="brake" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
