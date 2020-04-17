import React, { Component } from 'react'
import PropTypes from 'prop-types'

const links = [
  { title: 'Dribbble', url: 'https://dribbble.com/Fralleee', image: '/images/__dribbble.webp' },
  { title: 'Github', url: 'https://github.com/Fralleee', image: '/images/__github.webp' },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/fralle', image: '/images/__linkedin.webp' },
  { title: 'Twitter', url: 'https://twitter.com/crazylegsRoland', image: '/images/__twitter.webp' },
  { title: 'StackOverflow', url: 'https://stackoverflow.com/users/3155183/fralle', image: '/images/__stackoverflow.webp', margin: 5 }
]

const SocialLink = ({ link }) => (
  <div className='social__link menu__btn'>
    <a href={link.url} title={link.title}>
      <img src={link.image} alt={link.title} />
      <p className='title'>{link.title}</p>
    </a>
  </div>
)

SocialLink.propTypes = {
  link: PropTypes.object
}

SocialLink.defaultProps = {}

class SocialBar extends Component {
  render() {
    return links.map(link => <SocialLink key={link.title} link={link} />)
  }
}

SocialBar.propTypes = {}
SocialBar.defaultProps = {}
export default SocialBar
