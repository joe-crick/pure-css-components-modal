Pure CSS Components Modal
==================

[![Greenkeeper badge](https://badges.greenkeeper.io/joe-crick/pure-css-components-modal.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/joe-crick/pure-css-components-modal.svg?branch=master)](https://travis-ci.org/joe-crick/pure-css-components-modal)
[![GitHub license](https://img.shields.io/github/license/Day8/re-frame.svg)](license.txt) 
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
![Current Version](https://img.shields.io/badge/version-0.0.1-green.svg)


A small JS utility for working with Pure.CSS Components Modal. 

NOTE: This is an independent project, and is not directly associated with Pure CSS.

### Install from NPM

```js
yarn add purecss-components-modal
```
or
```js
npm i purecss-components-modal -S
```

## Example

```js

import Modal from 'purecss-components-modal';

const loginModal = Modal('#login-modal');

// Show the modal
loginModal.open();

// Hide the modal
loginModal.close();

// Toggle the modal
loginModal.toggle();

// Check if the modal is open
loginModal.isOpen();

// Check if the modal is closed
loginModal.isClosed();

```

