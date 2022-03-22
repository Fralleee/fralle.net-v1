import React, { Component } from "react"
import "components/shared/styles/Masonry.scss"

class Masonry extends Component {
  render() {
    return (
      <div className={`masonry ${this.props.className || ""}`} style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

Masonry.propTypes = {}

export default Masonry
