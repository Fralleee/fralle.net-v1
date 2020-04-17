import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { parse, stringify } from 'qs'
import ProjectLink from 'shared/ProjectLink'
import FilterBar from 'Work/FilterBar'
import { doFilter } from 'utils/filter'
import Jumbotron from 'shared/Jumbotron'
import Masonry from 'shared/Masonry'

@inject('ProjectStore')
@inject('GithubStore')
@observer
class Work extends Component {
  query = parse(this.props.location.search.substr(1))
  state = {
    search: this.query.search || '',
    project: this.query.project ? JSON.parse(this.query.project) : true,
    github: this.query.github ? JSON.parse(this.query.github) : true,
    mounted: false
  }

  constructor(props) {
    super(props)
    props.GithubStore.fetchRepositoryList()
  }

  onMount = () => {
    this.setState({ mounted: true })
  }

  newFilter = newFilter => {
    this.query = { ...this.query, ...newFilter }
    window.history.pushState('', '', `${window.location.href.split('?')[0]}?${stringify(this.query)}`)
    this.setState({ ...newFilter })
  }
  render() {
    const { ProjectStore, GithubStore } = this.props
    const projects = ProjectStore.projectList.map(proj => proj)
    const repositories = GithubStore.repoList.data.map(repo => repo)
    const { project, github, search, mounted } = this.state
    const data = [...repositories, ...projects].filter(doFilter({ project, github }, search, ['name', 'description', 'language', 'status']))
    const repositoriesLoaded = repositories.length > 0
    return [
      <Jumbotron key='welcome' title='PUBLIC WORKSPACE' subtitle='where the magic happens' image='/images/svg/workspace2.svg' onMount={this.onMount} />,
      <FilterBar key='FilterBar' filter={{ project, github }} search={search} onFilter={this.newFilter} mounted={mounted} />,
      <Masonry className={mounted && repositoriesLoaded ? 'mounted' : 'unmounted'} key='masonry' style={{ minHeight: '100vh' }}>
        {data.map((el, index) => <ProjectLink className='masonry__item' key={el.name + index} {...el} style={{ animationDelay: `${index * 50}ms` }} />)}
      </Masonry>,
      <div key='padding' style={{ height: 100, width: '100%' }} />
    ]
  }
}

Work.propTypes = {
  ProjectStore: PropTypes.object,
  GithubStore: PropTypes.object
}

export default Work
