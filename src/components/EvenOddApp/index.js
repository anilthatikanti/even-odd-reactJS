// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {value: 0}

  onIncrement = () => {
    const number = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({value: prevState.value + number}))
  }

  render() {
    const {value} = this.state
    const oddEven = value % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="card">
          <h1>Count {value}</h1>
          <p className="para">Count is {oddEven}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">* Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
