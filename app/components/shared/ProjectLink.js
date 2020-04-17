import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import 'shared/styles/ProjectLink.scss'

class ProjectLink extends Component {
  render() {
    const { name, description, url, status, language, image, bgColor, category, className, style } = this.props
    const srcImg = image
    return (
      <LazyLoad height={category === 'github' ? 280 : 580} offset={0}>
        <div className={`projectLink ${status || language} ${className || ''} ${category}`} style={{ backgroundColor: bgColor, backgroundImage: `url(${srcImg}`, ...style }}>
          <div className='projectLink__overlay' />
          {category === 'project' && (
            <Link to={`/${url}`} title={name}>
              <h3>{name}</h3>
              <h4>{description}</h4>
            </Link>
          )}
          {category === 'github' && (
            <a href={url} title={name}>
              <h3>{name}</h3>
              <h4>{description}</h4>
            </a>
          )}
        </div>
      </LazyLoad>
    )
  }
}

ProjectLink.propTypes = {
  status: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  bgColor: PropTypes.string,
  language: PropTypes.string,
  category: PropTypes.string
}

export default ProjectLink
