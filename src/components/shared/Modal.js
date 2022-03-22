import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
  constructor(props) {
    super(props)
    this.element = document.createElement('div')
    this.goBack = this.goBack.bind(this)
    this.modalInteraction = this.modalInteraction.bind(this)
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.element)
    this.modal.focus()
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element)
  }

  goBack(e) {
    const { toggle } = this.props
    e.stopPropagation()
    toggle()
  }

  modalInteraction(e) {
    if (e.key !== 'Escape') {
      e.stopPropagation()
    }
  }

  render() {
    const { children, toggle } = this.props
    return ReactDOM.createPortal(
      <div className='modal--overlay' role='button' onClick={this.goBack} tabIndex={-1} onKeyUp={this.goBack}>
        <div
          ref={modal => {
            this.modal = modal
          }}
          className='modal--container'
          role='button'
          onClick={e => e.stopPropagation()}
          onKeyUp={this.modalInteraction}
          tabIndex={-1}
          toggle={toggle}
        >
          {children}
        </div>
      </div>,
      this.element
    )
  }
}

Modal.propTypes = {
  toggle: PropTypes.func
}

export default Modal
