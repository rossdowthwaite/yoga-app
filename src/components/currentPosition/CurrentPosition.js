import React, { Component } from 'react'
import PropTypes from 'prop-types'

CurrentPosition.propTypes = {
  position: PropTypes.object.isRequired,
}

export default function CurrentPosition({position}) {
  return (
    <div>
      <h2>{ position.name }</h2>
    </div>
  )
}
