/**
 * @desc Small utility for manipulating a Pure.CSS-Component modal.
 * @param selector
 * @returns {{isOpen: isOpen, isClosed: isClosed, toggle: toggle, show: show, hide: hide}}
 */
module.exports = function Modal(selector) {
  const openRadio = document.querySelector(selector);
  let closeRadio = openRadio.nextElementSibling;

  while (closeRadio.className.indexOf('modal-container') < 0) {
    closeRadio = closeRadio.nextElementSibling;
  }

  return {

    isOpen: function isOpen() {
      return openRadio.checked;
    },

    isClosed: function isClosed() {
      return closeRadio.checked;
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
      closeRadio.checked = true;
    }

  }

};