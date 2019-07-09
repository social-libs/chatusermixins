function createChatUserUserMixin (execlib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib;

  function ChatUserUserMixin () {
  }
  ChatUserUserMixin.prototype.destroy = lib.dummyFunc;
  ChatUserUserMixin.prototype.sendChatMessage = function (togroup, to, msg, defer) {
    qlib.promise2defer(this.__service.sendChatMessage(togroup, to, msg), defer);
  };
  ChatUserUserMixin.prototype.getChatConversations = function (defer) {
    qlib.promise2defer(this.__service.getChatConversations(), defer);
  };
  ChatUserUserMixin.prototype.getChatMessages = function (conversationid, oldestmessageid, howmany, defer) {
    qlib.promise2defer(this.__service.getChatMessages(conversationid, oldestmessageid, howmany), defer);
  };

  ChatUserUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ChatUserUserMixin
      ,'getChatConversations'
      ,'getChatMessages'
      ,'sendChatMessage'
    );
  };

  ChatUserUserMixin.visiblefields = ['chatnotification'];

  return ChatUserUserMixin;
}

module.exports = createChatUserUserMixin;

