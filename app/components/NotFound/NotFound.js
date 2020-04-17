import React, { Component } from 'react'
import 'NotFound/notfound.scss'
import Img404 from 'images/svg/404.svg'

class PageNotFound extends Component {
  render() {
    const path = this.props.location.pathname.substr(1)
    return (
      <div className='notfound'>
        <h1 className='heading'>404 Not found</h1>
        <img src={Img404} alt='Hey' />
        <div>
          <h3>
            Why hello there.. <br />
            <strong>{path}</strong> you say? Never heard of it.
          </h3>
          <p style={{ marginTop: 25 }}>This could be caused by following reasons</p>
          <ul className='na-reasons__list'>
            <li>There is no project by that name</li>
            <li>Project is under development and is not ready for presentation</li>
            <li>Something went terribly wrong</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PageNotFound
