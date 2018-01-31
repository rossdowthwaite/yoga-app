import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sequence from '../../components/sequence/Sequence'
import Play from '../../components/play/Play'
import { createSequence } from '../../utils/api'
import './styles.css'

class SequenceForm extends Component {

  state = {
    no_of_moves: 0,
    level: 'beginner',
    positions: null
  }

  handleLevelChange = (event) => {
    const value = event.target.value
    this.setState( () => ({ level: value }) )
  }

  handleNumberChange = (event) => {
    const value = event.target.value
    this.setState( () => ({ no_of_moves: value }) )
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const positions = await createSequence(this.state);
    this.setState( () => ({ positions: positions }) )
  }

  render () {
    console.log(this.state)
    const { level, no_of_moves, positions } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <input
            className="input"
            id="no_of_moves"
            type="number"
            value={no_of_moves}
            onChange={this.handleNumberChange}
            />

          <select
            name="level"
            className="input"
            value={level}
            onChange={this.handleLevelChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <input
            type="submit"
            value="Submit"
            className="submit blank" />

        </form>

        {
          !positions
            ? ''
            : <div>
                <Play sequence={positions}/>
                <Sequence positions={positions} />
              </div>
        }
      </div>
    )
  }
}

export default SequenceForm
