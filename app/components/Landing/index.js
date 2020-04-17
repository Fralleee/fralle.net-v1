import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Intro from 'Landing/Intro'
import Recent from 'Landing/Recent'
import About from 'Landing/About'
import Jumbotron from 'shared/Jumbotron'

class Landing extends Component {
  state = { mounted: false }
  onMount = () => {
    this.setState({ mounted: true })
  }
  render() {
    const { projects } = this.props
    const { mounted } = this.state
    return [
      <Jumbotron key='welcome' title='DESIGNER AND DEVELOPER' subtitle='... and a little bit of rock and roll' image='/images/svg/workspace_large.svg' onMount={this.onMount} />,
      <Intro key='Intro' mounted={mounted} />,
      <Recent key='Recent' projects={projects} mounted={mounted} />,
      <About key='About' />
    ]
  }
}

Landing.propTypes = {
  projects: PropTypes.array
}

export default Landing
