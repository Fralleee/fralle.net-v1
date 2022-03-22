import React, { Component } from "react"
import PropTypes from "prop-types"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
import "prismjs/components/prism-csharp.min"
import "components/shared/styles/Code.scss"

class Code extends Component {
  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    Prism.languages.jsx = Object.assign({}, Prism.languages.jsx, {
      "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|import|default|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: true,
        inside: {
          punctuation: /[.\\]/
        }
      },
      klas: /<(.*?)(["\d\w\s])\/?>/,
      annat: /\b(?:import|from|return|export|default)\b/,
      keyword: /\b(?:this|var|const|let|class|extends|if|else|while|do|for|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/
    })
    Prism.highlightElement(this.code, false, console.log)
  }

  render() {
    const { language } = this.props
    return (
      <pre className='code'>
        <code
          className={language}
          ref={code => {
            this.code = code
          }}
        >
          {this.props.children}
        </code>
      </pre>
    )
  }
}

Code.propTypes = {
  language: PropTypes.string
}

Code.defaultProps = {
  language: "language-jsx"
}

export default Code
