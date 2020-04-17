import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImageZoom from 'react-medium-image-zoom'
import LazyLoad from 'react-lazyload'
import 'shared/styles/Image.scss'

class Image extends Component {
  render() {
    const { src, alt, style } = this.props
    return [
      <LazyLoad key='image' height='100%' offset={100} >
      <ImageZoom        
        image={{
          src,
          alt,
          className: 'img',
          style
        }}
        zoomImage={{ src, alt }}
      />
      </LazyLoad>,
      <p key='footer' className='image__footer'>
        Image: {alt}
      </p>
    ]
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
