var test = require('tape');
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var Modal = require('./index.js');

function setUp() {
  const mock = new MockBrowser();
  document = mock.getDocument();
  document.body.innerHTML = `<input type="radio" class="toggle-modal hidden" id="test-modal" name="modal-toggle"/>
<label for="test-modal" class="pure-button">Open Modal</label>
<div class="modal-container invisible">
    <div class="modal-frame">
        <div class="modal-header">
            Header
            <input type="radio" id="close-modal" name="modal-toggle" class="hidden"/>
            <label for="close-modal" class="close-button">x</label>
        </div>
        <div class="modal-body">
            Body
        </div>
    </div>
</div>`;
  return document;
}

test('Modal ', nest => {
  nest.test('Shows a modal', assert => {
    const doc = setUp();
    const modal = Modal('#test-modal');
    const modalToggle = doc.querySelector('#test-modal');

    modal.show();
    assert.ok(modalToggle.checked, 'modal should show');
    assert.end();
  });

  nest.test('Hides a modal', assert => {
    const doc = setUp();
    const modal = Modal('#test-modal');
    const modalToggle = doc.querySelector('#test-modal');

    modal.hide();
    assert.ok(!modalToggle.checked, 'modal should be hidden');
    assert.end();
  });

  nest.test('Toggles a modal', assert => {
    setUp();
    const modal = Modal('#test-modal');

    modal.toggle();
    assert.ok(modal.isOpen(), 'modal should be shown');
    modal.toggle();
    assert.ok(modal.isClosed(), 'modal should be hidden');
    assert.end();
  });

});
