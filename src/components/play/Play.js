import React, { Component } from 'react'
import CurrentPosition from '../currentPosition/CurrentPosition'
import PropTypes from 'prop-types'


class Play extends Component {

  state = {
    currentPosition: this.props.sequence[0],
    nextIndex: 1,
  }

  componentDidMount() {
    this.interval = setInterval( () => {
      this.state.nextIndex === this.props.sequence.length
        ? this.stopSequence()
        : this.goToNextPosition()
    }, 500)
  }

  componentWillUnmount() {
    this.stopSequence()
  }

  stopSequence = () => {
    console.log('Sequence stopped')
    clearInterval(this.interval);
  }

  goToNextPosition = () => {
    this.setState( (prevState) => ({
      currentPosition: this.props.sequence[prevState.nextIndex],
      nextIndex: prevState.nextIndex + 1
    }))
  }

  render() {
    console.log(this.state)
    const { currentPosition } = this.state
    return (
      <div>
        <CurrentPosition position={currentPosition}/>
      </div>
    )
  }
}

Play.propTypes = {
  sequence: PropTypes.array.isRequired
}

export default Play
