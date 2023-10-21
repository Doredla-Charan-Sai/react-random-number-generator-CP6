// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  onGenerate = () => {
    this.setState({num: Math.floor(Math.random() * 100)})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-cot">
        <div className="content-cont">
          <h1 className="main-head">Random Number</h1>
          <p className="main-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="num main-head">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
