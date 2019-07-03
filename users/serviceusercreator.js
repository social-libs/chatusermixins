function createChatServiceUserMixin (execlib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib;

  function ChatServiceUserMixin () {
  }
  ChatServiceUserMixin.prototype.destroy = lib.dummyFunc;
  ChatServiceUserMixin.prototype.acknowledgeChatNotification  = function (ntfobj, defer) {
    qlib.promise2defer(this.__service.acknowledgeChatNotification(ntfobj), defer);
  };

  ChatServiceUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ChatServiceUserMixin
      ,'acknowledgeChatNotification'
    );
  };

  ChatServiceUserMixin.visiblefields = [];

  return ChatServiceUserMixin;
}

module.exports = createChatServiceUserMixin;

