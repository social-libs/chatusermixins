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
    qlib.promise2console(defer.promise, 'getChatConversations fetched');
    qlib.promise2defer(this.__service.getChatConversations(), defer);
  };
  ChatUserUserMixin.prototype.initiateChatConversationsWithUsers = function (userids, defer) {
    qlib.promise2console(defer.promise, 'initiateChatConversationsWithUsers done');
    qlib.promise2defer(this.__service.initiateChatConversationsWithUsers(userids), defer);
  };
  ChatUserUserMixin.prototype.getChatMessages = function (conversationid, oldestmessageid, howmany, defer) {
    qlib.promise2defer(this.__service.getChatMessages(conversationid, oldestmessageid, howmany), defer);
  };
  ChatUserUserMixin.prototype.markMessageRcvd = function (conversationid, messageid, defer) {
    qlib.promise2defer(this.__service.markMessageRcvd(conversationid, messageid), defer);
  };
  ChatUserUserMixin.prototype.markMessageSeen = function (conversationid, messageid, defer) {
    qlib.promise2defer(this.__service.markMessageSeen(conversationid, messageid), defer);
  };

  ChatUserUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ChatUserUserMixin
      ,'getChatConversations'
      ,'initiateChatConversationsWithUsers'
      ,'getChatMessages'
      ,'sendChatMessage'
      ,'markMessageRcvd'
      ,'markMessageSeen'
    );
  };

  ChatUserUserMixin.visiblefields = ['chatnotification'];

  return ChatUserUserMixin;
}

module.exports = createChatUserUserMixin;

