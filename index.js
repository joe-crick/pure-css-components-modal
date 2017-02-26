/**
 * @desc Small utility for manipulating a Pure.CSS-Component modal.
 * @param selector
 * @returns {{isOpen: isOpen, isClosed: isClosed, toggle: toggle, show: show, hide: hide}}
 */
module.exports = function Modal(selector) {
  const openRadio = document.querySelector(selector);
  let closeRadioParent = openRadio.nextElementSibling;

  while (closeRadioParent.className.indexOf('modal-container') < 0) {
    closeRadioParent = closeRadioParent.nextElementSibling;
  }

  const closedRadio = closeRadioParent.querySelector('.close-modal');

  return {

    openRadio: openRadio,
    closedRadio: closedRadio,

    isOpen: function isOpen() {
      return this.openRadio.checked;
    },

    isClosed: function isClosed() {
      return this.closeRadioParent.checked;
    },

    toggle: function toggle() {
      if (this.isOpen()) {
        this.hide();
      } else {
        this.show();
      }
    },

    show: function show() {
      this.openRadio.checked = true;
    },

    hide: function hide() {
      this.closedRadio.checked = true;
    }

  }

};