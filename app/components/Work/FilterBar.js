import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'Work/styles/FilterBar.scss'

class FilterBar extends Component {
  handleSearch = e => {
    this.props.onFilter({ search: e.target.value })
  }

  handleFilter = e => {
    const { filter } = this.props
    const { value } = e.target
    this.props.onFilter({ [value]: !filter[value] })
  }

  render() {
    const { search, filter, mounted } = this.props
    return (
      <div className={`filter ${mounted ? 'mounted' : ''}`}>
        <input className='filter__text' type='text' value={search} onChange={this.handleSearch} placeholder='name, description, language, status ...' />
        <div className='filter__buttons'>
          <button className={`btn ${filter.project ? 'active' : ''}`} value='project' onClick={this.handleFilter}>
            Projects
          </button>
          <button className={`btn ${filter.github ? 'active' : ''}`} value='github' onClick={this.handleFilter}>
            Repositories
          </button>
        </div>
      </div>
    )
  }
}

FilterBar.propTypes = {
  search: PropTypes.string,
  filter: PropTypes.object,
  onFilter: PropTypes.func,
  mounted: PropTypes.bool
}

export default FilterBar
