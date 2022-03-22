import React, { Component } from "react"
import PropTypes from "prop-types"
import "components/shared/styles/Jumbotron.scss"

class Jumbotron extends Component {
  state = { mounted: false }

  componentDidMount() {
    const img = new Image()
    img.src = this.props.image
    img.onload = () => {
      this.setState({ mounted: true })
      if (this.props.onMount) this.props.onMount()
      this.welcome.style.backgroundImage = `url(${img.src})`
    }
  }

  render() {
    const { mounted } = this.state
    const { title, subtitle, className } = this.props
    return (
      <section
        ref={welcome => {
          this.welcome = welcome
        }}
        className={`${mounted ? "mounted" : ""} welcome ${className || ""}`}
        key='Welcome'
      >
        <div className='welcome__texts'>
          <h1 className={`${mounted ? "mounted" : ""} welcome__title`}>{title}</h1>
          <h2 className={`${mounted ? "mounted" : ""} welcome__subtitle`}>{subtitle}</h2>
        </div>
      </section>
    )
  }
}

Jumbotron.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  onMount: PropTypes.func
}

export default Jumbotron
