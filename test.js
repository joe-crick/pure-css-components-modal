var test = require('tape');
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var Modal = require('./index.js');

function setUp() {
  const mock = new MockBrowser();
  document = mock.getDocument();
  document.body.innerHTML = `<input type="radio" class="open-modal pcssc-invisible" id="test-modal" name="modal-toggle"/>
            <label for="test-modal" class="pure-button">Open Modal</label>
            <div class="modal-container pcssc-invisible">
                <div class="modal-frame">
                    <div class="modal-header">
                        Header
                        <input type="radio" id="close-modal" name="modal-toggle" class="close-modal pcssc-invisible"/>
                        <label for="close-modal" class="close-button">x</label>
                    </div>
                    <div class="modal-body">
                        Body
                    </div>
                </div>
            </div>`;
  return document;
}

function tearDown() {
  document = undefined;
}

test('Modal ', nest => {
  nest.test('Shows a modal', assert => {
    const doc = setUp();
    const modal = Modal('#test-modal');
    const modalToggle = doc.querySelector('#test-modal');

    modal.show();
    assert.ok(modalToggle.checked, 'modal should show');
    assert.end();
    tearDown();
  });

  nest.test('Hides a modal', assert => {
    const doc = setUp();
    const modal = Modal('#test-modal');
    const modalToggle = doc.querySelector('#test-modal');

    modal.hide();
    assert.ok(!modalToggle.checked, 'modal should be hidden');
    assert.end();
    tearDown();
  });

  nest.test('Toggles a modal', assert => {
    const doc = setUp();
    const modal = Modal('#test-modal');
    const modalToggle = doc.querySelector('#test-modal');

    modal.toggle();
    assert.ok(modalToggle.checked, 'modal should be shown');
    modal.toggle();
    assert.ok(!modalToggle.checked, 'modal should be hidden');
    assert.end();
    tearDown();
  });

  nest.test('Shows open state', assert => {
    const doc = setUp();
    const modal = Modal('#test-modal');
    const modalToggle = doc.querySelector('#test-modal');

    modal.show();
    assert.ok(modal.isOpen() === modalToggle.checked, 'modal should be shown');
    assert.end();
    tearDown();
  });

  nest.test('Shows closed state', assert => {
    const doc = setUp();
    const modal = Modal('#test-modal');
    const modalToggle = doc.querySelector('#test-modal');

    modal.hide();
    assert.ok(modal.isClosed() === !modalToggle.checked, 'modal should be shown');
    assert.end();
    tearDown();
  });

});
