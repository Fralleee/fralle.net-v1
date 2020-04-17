import React, { Component } from 'react'
import Image from 'shared/Image'
import 'Landing/styles/About.scss'

class About extends Component {
  render() {
    return (
      <section className='about'>
        <h3 className='about__title'>About me</h3>
        <p>
          As I previously mentioned, my name is Roland Chelwing. I am currently employed as a system developer by Asitis in Skövde, Sweden. Back in the day, about a year ago, I was
          mainly creating windows applications in C# and SQL. But in these modern days where data moves faster than people I nowadays develop web apps in React and Redux.
        </p>
        <div className='about__intermission'>
          <p>
            <strong>History time</strong>
            <br />
            I was seven years old when my older brother started teaching me programming, in some kind of PASCAL or BASIC, in which I created a text-based RPG using my arsenal of
            IF, THEN and GOTO.
          </p>
        </div>
        <p>
          Looking back at this time it occured to me that this has always been a dream of mine, to develop and release a desktop game, therefore I have started learning Unity and
          will tango with Lady C# once again.
        </p>
        <Image style={{ marginTop: 55 }} src='/images/profile.webp' alt={'That\'s me'} />

        <div className='about__intermission'>
          <p className='centered'>
            Any questions? Feel free to email →{' '}
            <a href='mailto: roland@fralle.com' title='Mail me'>
              roland@fralle.com
            </a>
            <br />
            <em>Or you can click one of the many social links in the menu</em>
          </p>
        </div>
      </section>
    )
  }
}

export default About
