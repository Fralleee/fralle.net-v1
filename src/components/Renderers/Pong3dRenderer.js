import React, { Component } from "react"
import Jumbotron from "components/shared/Jumbotron"
import Code from "components/shared/Code"
import "components/Renderers/styles/project.scss"
import GamingImage from "images/gaming.webp"

const codeExample = `
  // Don't try this at home tho
  import React, { Component } from 'react'
  import PropTypes from 'prop-types'
  import Intro from 'Landing/Intro'
  import Recent from 'Landing/Recent'
  import About from 'Landing/About'
  import Jumbotron from 'shared/Jumbotron'

  // Now that the DOM is fully loaded, create and setup the
  // event listeners
  
  class Landing extends Component {
    state = { mounted: false }
    onMount = () => {
      this.setState({ mounted: true })
    }
    render() {
      const { projects } = this.props
      const { mounted } = this.state
      return [
        <Jumbotron key='welcome' title='DESIGNER AND DEVELOPER' onMount={this.onMount} />,
        <Intro key='Intro' mounted={mounted} />,
        <Recent key='Recent' projects={projects} mounted={mounted} />,
        <About key='About' />
      ]
    }
  }
  
export default Landing  
`

const codeExample3 = `
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

[RequireComponent(typeof(Rigidbody))]
public class PadController : MonoBehaviour
{
  private Rigidbody body;
  [SerializeField] private float speed = 50f;
  [SerializeField] private float maxSpeed = 15f;
  [SerializeField] private float spinCooldown = .2f;
  private float movementX = 0f;
  private float movementZ = 0f;
  private float nextSpin = 0f;

  #region Monobehaviour methods
  void Start()
  {
    body = GetComponent<Rigidbody>();
    body.maxAngularVelocity = 500f;
  }

  void Update()
  {
    movementX = Input.GetAxisRaw("Vertical") * -speed;
    movementZ = Input.GetAxisRaw("Horizontal") * speed;
    if (Input.GetButtonDown("Fire1") && Time.time > nextSpin)
    {
      Spin();
      nextSpin = Time.time + spinCooldown;
    }
  }


  void FixedUpdate()
  {
    body.AddForce(new Vector3(movementX, 0, movementZ), ForceMode.VelocityChange);
    if (body.velocity.magnitude > maxSpeed) body.velocity = body.velocity.normalized * maxSpeed;
  }

  void LateUpdate()
  {
    ClampPosition();
  }
  #endregion

  void ClampPosition()
  {
    var pos = transform.position;
    pos.x = Mathf.Clamp(transform.position.x, -13f, 13f);
    pos.z = Mathf.Clamp(transform.position.z, 20.5f, 29f);
    transform.position = pos;
  }

  void Spin()
  {
    transform.DORotate(new Vector3(0, 180f, 0), .4f, RotateMode.LocalAxisAdd).SetEase(Ease.OutBack);
  }

  void OnCollisionEnter(Collision collision)
  {
    if(collision.gameObject.tag == "Ball")
    {
      Rigidbody ballRb = collision.gameObject.GetComponent<Rigidbody>();
      Vector3 newForce = new Vector3(-Input.GetAxis("Vertical"), 0, Input.GetAxis("Horizontal"));
      ballRb.AddForce(newForce, ForceMode.VelocityChange);
    }
  }
}
`
const staggerEasing = (base, index) => `${base + index * 110}ms`
const staggerDelay = (base, index) => `${base + index * 50}ms`
class ProjectPage extends Component {
  render() {
    const baseDurationMs = 400
    const baseDelay = 1000
    const liArr = [0, 0, 0, 0, 0, 0, 0, 0]
    console.log(liArr)
    return [
      <Jumbotron key='welcome' title='LET ME SEE THAT PONG' subtitle='3D PONG / ARCADE' image={GamingImage} />,
      <div key='project' className='project'>
        <div className='content'>
          <h1 style={{ textAlign: "center" }}>In progress</h1>
          <p style={{ textAlign: "center" }}>Still in early development, more info will come.</p>
          <div className='grid-test'>
            <div className='grid-test-item'>x</div>
            <div className='grid-test-item'>o</div>
            <div className='grid-test-item'>x</div>
            <div className='grid-test-item'>o</div>
            <div className='grid-test-item'>x</div>
            <div className='grid-test-item'>o</div>
          </div>

          <ul className='list-test'>
            {liArr.map((item, index) => (
              <li
                key={index}
                className='list-test-item'
                style={{
                  animationDuration: staggerEasing(baseDurationMs, index),
                  animationDelay: staggerDelay(baseDelay, index)
                }}
              >
                Listitem
              </li>
            ))}
          </ul>

          <Code key='jsx'>{codeExample}</Code>
          <Code key='csharp' language='language-csharp'>
            {codeExample3}
          </Code>
        </div>
      </div>
    ]
  }
}

export default ProjectPage
