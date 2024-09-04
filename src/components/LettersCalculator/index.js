// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput.length)

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="description">
            Enter the phrase
          </label>
          <input
            id="input"
            onChange={this.onChangeSearchInput}
            type="text"
            placeholder="Enter the phrase"
            className="input-element"
            value={searchInput}
          />
          <p className="count-description">
            No.of letters: {searchInput.length}
          </p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
