import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

Position.propTypes = {
  positionName: PropTypes.string.isRequired
}

export default function Position ({positionName, index}) {
  return (
    <div className="position">
      <h2 className="position_name">{index + 1}. { positionName }</h2>
    </div>
  )
}
