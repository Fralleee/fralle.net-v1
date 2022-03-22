import React, { Component } from "react"
import PropTypes from "prop-types"
import Intro from "components/Landing/Intro"
import Recent from "components/Landing/Recent"
import About from "components/Landing/About"
import Jumbotron from "components/shared/Jumbotron"
import WorkspaceImage from "images/svg/workspace_large.svg"

class Landing extends Component {
  state = { mounted: false }
  onMount = () => {
    this.setState({ mounted: true })
  }
  render() {
    const { projects } = this.props
    const { mounted } = this.state
    return [
      <Jumbotron key='welcome' title='DESIGNER AND DEVELOPER' subtitle='... and a little bit of rock and roll' image={WorkspaceImage} onMount={this.onMount} />,
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
