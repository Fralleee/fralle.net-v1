import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'Landing/styles/Intro.scss'

class Intro extends Component {
  render() {
    const { mounted } = this.props
    return (
      <section className={`intro ${mounted ? 'mounted' : ''}`}>
        <blockquote>
          Hello! I am <strong>Roland Chelwing</strong>, a system developer based in <strong>Skövde, Sweden</strong>. {/*  */}
          When I&apos;m not designing financial swag for{' '}
          <a href='https://www.asitis.se/' title='Asitis homepage'>
            Asitis
          </a>{' '}
          I usually spend my time creating awesome stuff in Unity.
        </blockquote>
      </section>
    )
  }
}

Intro.propTypes = {
  mounted: PropTypes.bool
}

export default Intro
