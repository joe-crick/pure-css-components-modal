// Relax
// Slow down
// Think through it first, plan it, then code

// given a selector, return a modal instance - grab the hidden modal radio by id
// We need to maintain state, so lets use an object
// Get Close and Open modal by position
// Determine the state of the modal
// Toggle away

module.exports = function Modal(selector) {

  const doc = document;
  const openRadio = doc.querySelector(selector);
  let closeRadio = openRadio.nextElementSibling;

  while (closeRadio.className.indexOf('modal-container') < 0) {
    closeRadio = closeRadio.nextElementSibling;
  }

  return {

    isOpen: function isOpen() {
      return openRadio.checked;
    },

    toggle: function toggle() {
      if (this.isOpen()) {
        closeRadio.checked = true;
      } else {
        openRadio.checked = true;
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