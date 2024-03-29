﻿import "styles/style.scss"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import ReactGA from "react-ga"
import App from "components/App"
import { Provider } from "mobx-react"
import GithubStore from "stores/Github"
import ProjectStore from "stores/Project"

ReactGA.initialize("UA-46722568-1")

function render() {
  ReactDOM.render(
      <Provider GithubStore={GithubStore} ProjectStore={ProjectStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    document.getElementById("root")
  )
}

render()

