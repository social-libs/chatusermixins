(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var lR = ALLEX.execSuite.libRegistry;
lR.register('social_chatusermixinslib', require('./webindex')(ALLEX));

},{"./webindex":5}],2:[function(require,module,exports){
module.exports = {
  acknowledgeChatNotification: [{
    title: 'Notification Object',
    type: 'object',
    required: ['affected', 'mids', 'lastmessage'],
    properties: {
      affected: { type: 'array' },
      mids: { type: 'array' },
      lastmessage: {
        type: 'object',
        required: ['from', 'message', 'created', 'seen']
      }
    }
  }]
}

},{}],3:[function(require,module,exports){
module.exports = {
  sendChatMessage: [{
    name: 'To Group',
    type: 'string'
  },{
    name: 'To',
    type: 'string'
  },{
    name: 'Msg',
    type: 'string'
  }],
  getChatConversations: true,
  getChatMessages: [{
    name: 'Conversation ID',
    type: 'string'
  },{
    name: 'Oldest Message ID',
    type: ['number', 'null']
  },{
    name: 'How Many',
    type: ['number', 'null']
  }]
};

},{}],4:[function(require,module,exports){
module.exports = [/*{
  name: [{name: 'DB', identity:{role: 'user', name: 'user'}}, 'Chat'],
  role: 'user'
}*/];

},{}],5:[function(require,module,exports){
function createLib (execlib) {
  return {
    sinks: {
      remote: require('./remotesinks')
    },
    methoddescriptors: {
      user: require('./methoddescriptors/user'),
      service: require('./methoddescriptors/serviceuser')
    }
  };
}

module.exports = createLib;

},{"./methoddescriptors/serviceuser":2,"./methoddescriptors/user":3,"./remotesinks":4}]},{},[1]);
