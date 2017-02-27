'use strict';
/**
 * @desc Small utility for manipulating a Pure.CSS-Component modal.
 * @param selector
 * @returns {{isOpen: isOpen, isClosed: isClosed, toggle: toggle, show: show, hide: hide}}
 */
module.exports = function Modal(selector) {
  var openRadio = document.querySelector(selector);
  var closeRadioParent = openRadio.nextElementSibling;

  while (closeRadioParent.className.indexOf('modal-container') < 0) {
    closeRadioParent = closeRadioParent.nextElementSibling;
  }

  const closedRadio = closeRadioParent.querySelector('.close-modal');

  return {

    isOpen: function isOpen() {
      return openRadio.checked;
    },

    isClosed: function isClosed() {
      return closedRadio.checked;
    },

    toggle: function toggle() {
      if (this.isOpen()) {
        this.hide();
      } else {
        this.show();
      }
    },

    show: function show() {
      openRadio.checked = true;
    },

    hide: function hide() {
      closedRadio.checked = true;
    }

  }

};