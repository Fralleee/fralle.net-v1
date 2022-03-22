import { Component } from "react"
import { withRouter } from "react-router-dom"
import { camelize } from "utils/format"

class DocTitle extends Component {
  baseTitle = " – Fralle"

  setTitle(pathname) {
    const title =
      pathname === "/"
        ? "Fralle – Designer and developer"
        : pathname
            .substr(1)
            .split("-")
            .map(s => camelize(s))
            .join(" ") + this.baseTitle
    document.title = title
  }

  componentDidMount() {
    const { pathname } = this.props.location
    this.setTitle(pathname)
  }

  componentWillUpdate(nextProps) {
    const { pathname } = this.props.location
    if (pathname !== nextProps.location.pathname) this.setTitle(nextProps.location.pathname)
  }

  render() {
    return null
  }
}

export default withRouter(DocTitle)
