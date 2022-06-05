/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.png":
/*!****************************!*\
  !*** ./src/background.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/hills.png":
/*!***********************!*\
  !*** ./src/hills.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform.png */ "./src/platform.png");
/* harmony import */ var _background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../background.png */ "./src/background.png");
/* harmony import */ var _hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hills.png */ "./src/hills.png");
/* harmony import */ var _platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platformSmallTall.png */ "./src/platformSmallTall.png");
/* harmony import */ var _spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spriteRunLeft.png */ "./src/spriteRunLeft.png");
/* harmony import */ var _spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spriteRunRight.png */ "./src/spriteRunRight.png");
/* harmony import */ var _spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spriteStandLeft.png */ "./src/spriteStandLeft.png");
/* harmony import */ var _spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../spriteStandRight.png */ "./src/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var garvity = 0.9; //importe une image mais il faux que le script soit de type module!!










var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.width = 66;
    this.height = 150;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.speed = 10;
    this.image = createImage(_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: createImage(_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropwith: 177,
        width: 66
      },
      run: {
        right: createImage(_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: createImage(_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropwith: 341,
        width: 127.875
      }
    };
    this.currentsprite = this.sprites.stand.right;
    this.currentcropwith = this.sprites.stand;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentsprite, this.currentcropwith * this.frames, 0, this.currentcropwith, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && this.currentsprite === this.sprites.stand.right) this.frames = 0;else if (this.frames > 29 && this.currentsprite === this.sprites.run.right) this.frames = 0;else if (this.frames > 59 && this.currentsprite === this.sprites.stand.left) this.frames = 0;else if (this.frames > 29 && this.currentsprite === this.sprites.run.left) this.frames = 0;
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += garvity;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var genericObjects = [];
var platforms = [];
var player = new Player();
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOfset = 0;
var lastKey;

function init() {
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  platforms = [new Platform({
    x: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 4 + 500 + createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width - createImage(_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]).width,
    y: 270,
    image: createImage(_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: -1,
    y: 470,
    image: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width - 3,
    y: 470,
    image: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 2 + 200,
    y: 470,
    image: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 3 + 350,
    y: 470,
    image: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 4 + 500,
    y: 470,
    image: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 5 + 1000,
    y: 470,
    image: createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  })];
  player = new Player();
  scrollOfset = 0;
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update(); //mouvement du player et ecron

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOfset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOfset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOfset > 0) {
      scrollOfset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  } //contact avec le platform


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) player.velocity.y = 0;
  }); //sprites change

  if (keys.right.pressed && lastKey === 'right' && player.currentsprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentsprite = player.sprites.run.right;
    player.currentcropwith = player.sprites.run.cropwith;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentsprite !== player.sprites.run.left) {
    player.frames = 1;
    player.currentsprite = player.sprites.run.left;
    player.currentcropwith = player.sprites.run.cropwith;
    player.width = player.sprites.run.width;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentsprite !== player.sprites.stand.right) {
    player.frames = 1;
    player.currentsprite = player.sprites.stand.left;
    player.currentcropwith = player.sprites.stand.cropwith;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentsprite !== player.sprites.stand.right) {
    player.frames = 1;
    player.currentsprite = player.sprites.stand.right;
    player.currentcropwith = player.sprites.stand.cropwith;
    player.width = player.sprites.stand.width;
  } //win condition


  if (scrollOfset >= createImage(_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]).width * 5 + 1000) init(); //lose condition 

  if (player.position.y > canvas.height) init();
}

init();
animate();
window.addEventListener('keydown', function (_ref3) {
  var key = _ref3.key;

  switch (key) {
    case 'ArrowRight':
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 'ArrowLeft':
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 'ArrowDown':
      ;
      break;

    case 'ArrowUp':
      if (player.velocity.y === 0) player.velocity.y -= 20;
      break;
  }
});
window.addEventListener('keyup', function (_ref4) {
  var key = _ref4.key;

  switch (key) {
    case 'ArrowRight':
      keys.right.pressed = false;
      break;

    case 'ArrowLeft':
      keys.left.pressed = false;
      break;

    case 'ArrowDown':
      ;
      break;

    case 'ArrowUp':
      ;
      break;
  }
});
console.log(player.velocity.y);

/***/ }),

/***/ "./src/platform.png":
/*!**************************!*\
  !*** ./src/platform.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/platformSmallTall.png":
/*!***********************************!*\
  !*** ./src/platformSmallTall.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/spriteRunLeft.png":
/*!*******************************!*\
  !*** ./src/spriteRunLeft.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/spriteRunRight.png":
/*!********************************!*\
  !*** ./src/spriteRunRight.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/spriteStandLeft.png":
/*!*********************************!*\
  !*** ./src/spriteStandLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/spriteStandRight.png":
/*!**********************************!*\
  !*** ./src/spriteStandRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map