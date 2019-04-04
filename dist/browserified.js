(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var lR = ALLEX.execSuite.libRegistry;
lR.register('social_chatusermixinslib', require('./webindex')(ALLEX));

},{"./webindex":4}],2:[function(require,module,exports){
module.exports = {
  sendChatMessage: [{
    title: 'Message Object',
    type: 'object',
    required: ['to', 'message'],
    properties: {
      to: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {type: 'string'},
          role: {type: 'string'},
          realm: {type: 'string'}
        }
      },
      from: {
        type: ['object', 'null'],
        properties: {
          name: {type: 'string'},
          role: {type: 'string'},
          realm: {type: 'string'}
        }
      },
      message: {type: 'string'}
    }
  }]
};

},{}],3:[function(require,module,exports){
module.exports = [/*{
  name: [{name: 'DB', identity:{role: 'user', name: 'user'}}, 'Chat'],
  role: 'user'
}*/];

},{}],4:[function(require,module,exports){
function createLib (execlib) {
  return {
    sinks: {
      remote: require('./remotesinks')
    },
    methoddescriptors: {
      user: require('./methoddescriptors/user')
    }
  };
}

module.exports = createLib;

},{"./methoddescriptors/user":2,"./remotesinks":3}]},{},[1]);
