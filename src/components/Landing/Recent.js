import React, { Component } from "react"
import PropTypes from "prop-types"
import Masonry from "components/shared/Masonry"
import ProjectLink from "components/shared/ProjectLink"
import "components/Landing/styles/Recent.scss"

class Recent extends Component {
  render() {
    const { projects, mounted } = this.props
    return (
      <section className={`recent ${mounted ? "mounted" : ""}`}>
        <h3 className='recent__title'>Recent work</h3>
        <Masonry>{projects.slice(0, 3).map(link => <ProjectLink key={link.id} {...link} />)}</Masonry>
      </section>
    )
  }
}

Recent.propTypes = {
  projects: PropTypes.array,
  mounted: PropTypes.bool
}

export default Recent
