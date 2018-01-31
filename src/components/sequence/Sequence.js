import React, { Component } from 'react'
import Position from '../position/Position'
import PropTypes from 'prop-types'
import { fetchAllPositions, createSequence } from '../../utils/api';

function PositionList ({positions}) {
  return(
    <div>
      { positions.map( ({name}, index) => (
        <Position positionName={name} key={index} index={index}/>
      ))}
    </div>
  )
}

PositionList.propTypes = {
  positions: PropTypes.array.isRequired
}

class Sequence extends Component {

  static propTypes = {
    positions: PropTypes.array.isRequired
  }

  render() {
    const { positions } = this.props
    return (
      <div>
        { !positions
          ? <div>loading</div>
          : <PositionList positions={positions} />
        }
      </div>
    )
  }
}

export default Sequence
