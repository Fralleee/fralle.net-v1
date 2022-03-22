import React, { Component } from "react"
import PropTypes from "prop-types"
import Dribbble from "images/__dribbble.webp"
import Github from "images/__github.webp"
import LinkedIn from "images/__linkedin.webp"
import Twitter from "images/__twitter.webp"
import StackOverflow from "images/__stackoverflow.webp"

const links = [
  { title: "Dribbble", url: "https://dribbble.com/Fralleee", image: Dribbble },
  { title: "Github", url: "https://github.com/Fralleee", image: Github },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/fralle", image: LinkedIn },
  { title: "Twitter", url: "https://twitter.com/crazylegsRoland", image: Twitter },
  { title: "StackOverflow", url: "https://stackoverflow.com/users/3155183/fralle", image: StackOverflow, margin: 5 }
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
