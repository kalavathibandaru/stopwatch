// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timerOn: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({timerOn: false, timeElapsedInSeconds: 0})
  }

  onClickTimerOff = () => {
    clearInterval(this.timeInterval)
    this.setState({timerOn: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickTimerOn = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({timerOn: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {timerOn} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="main-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-card">
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="heading2">Timer</p>
          </div>
          <h1>{time}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button green-button"
              onClick={this.onClickTimerOn}
              disabled={timerOn}
            >
              Start
            </button>
            <button
              type="button"
              className="button red-button"
              onClick={this.onClickTimerOff}
            >
              Stop
            </button>
            <button
              type="button"
              className="button yellow-button"
              onClick={this.onClickResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
