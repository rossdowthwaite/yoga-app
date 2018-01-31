import React, { Component } from 'react';
import Home from '../../components/home/Home';
import Sequence from '../../components/sequence/Sequence'
import SequenceForm from '../../components/sequenceForm/SequenceForm'

class HomeContainer extends Component {
  render() {
    return(
      <div>
        <Home />
        <SequenceForm />
      </div>
    )
  }
}

export default HomeContainer;
