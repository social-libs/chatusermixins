function createChatUserUserMixin (execlib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib;

  function ChatUserUserMixin () {
  }
  ChatUserUserMixin.prototype.destroy = lib.dummyFunc;
  ChatUserUserMixin.prototype.sendChatMessage = function (messageobj, defer) {
    qlib.promise2defer(this.__service.sendChatMessage(messageobj), defer);
  };

  ChatUserUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ChatUserUserMixin,
      'sendChatMessage'
    );
  };

  ChatUserUserMixin.visiblefields = ['unreadchat'];

  return ChatUserUserMixin;
}

module.exports = createChatUserUserMixin;

