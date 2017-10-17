import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  renderModalContent(content) {
    return (
      <span
        className={`modal-component__simple-message-list-content`}
      >
        {content.map((m, i) => {
            return (
              <div
                key={i}
                className={`modal-component__content-line`}
              >
                {m}
              </div>
            );
          })
        }
      </span>
    );
  }

  render() {
    const {
      isActive,
      onClose,
      simpleMessageList,
      desiredClassName
    } = this.props;

    const topLevelClass =
      `${desiredClassName} modal-component modal ${isActive ? 'is-active' : null}`;

    return (
      <div className={topLevelClass}>
        <div className={`modal-component__background modal-background`} />
        <div className={`modal-component__content modal-card`}>
          <div className={`modal-component__content-body modal-card-body`}>
            <div className={`modal-component__content-lines-wrap`}>
              {
                simpleMessageList !== 'undefined' ?
                  this.renderModalContent(simpleMessageList)
                  :
                  null
              }
              <button
                onClick={onClose}
                className={`${desiredClassName}-close button is-primary`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  desiredClassName: PropTypes.string.isRequired,
  simpleMessageList: PropTypes.array
};

export default Modal;
