import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import ReactGA from 'react-ga'
import { inject, observer } from 'mobx-react'

import Landing from 'Landing'
import Work from 'Work'
import NotFound from 'NotFound/NotFound'
import Header from 'Header/Header'
import ScrollToTop from 'shared/ScrollToTop'
import DocTitle from 'shared/DocTitle'

const tracking = () => {
  ReactGA.pageview(window.location.pathname)
  return null
}

@inject('ProjectStore')
@observer
class App extends Component {
  previousLocation = this.props.location

  componentWillMount() {
    document.getElementById('loader').classList.add('loaded')
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props
    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location, ProjectStore } = this.props
    const { projectList } = ProjectStore
    const isModal = location.state && location.state.modal && this.previousLocation !== location
    const projects = projectList.map(proj => proj)
    const projectsWithRenderer = projects.filter(x => x.renderer)
    const path = location.pathname
    const project = path.length > 1 ? projects.find(x => x.id === path.substring(1, path.length)) : null
    return [
      <Header key='header' />,
      <main key='content' className='content'>
        <DocTitle />
        <ScrollToTop>
          <Switch key='routeSwitch' location={isModal ? this.previousLocation : location}>
            <Route exact path='/' render={() => <Landing projects={projects} />} />
            <Route path='/work' render={() => <Work location={location} />} />
            {projectsWithRenderer.map(p => <Route key={p.id} path={`/${p.url}`} render={() => <p.renderer project={project} />} />)}
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </main>,
      <Route key='tracking' path='/' component={tracking} />
    ]
  }
}

App.propTypes = {
  ProjectStore: PropTypes.object
}

export default withRouter(App)
