function createServiceMixin (execlib, chatutilslib) {
  'use strict';

  var lib = execlib.lib,
    q = lib.q,
    execSuite = execlib.execSuite;

  function ChatUserMixin () {
    if (!lib.isFunction(this.__hotel.sendChatMessage)) {
      throw new lib.Error('CHATHOTELMIXINSLIB_NOT_IMPLEMENTED_ON_HOTEL', 'Hotel must implement the social_chathotelmixinslib');
    }
  }
  ChatUserMixin.prototype.destroy = lib.dummyFunc;
  ChatUserMixin.prototype.sendChatMessage = function (togroup, to, msg) {
    return this.__hotel.sendChatMessage(this.name, togroup, to, msg);
  };
  ChatUserMixin.prototype.getChatConversations = function () {
    return this.__hotel.getChatConversations(this.name);
  };
  ChatUserMixin.prototype.initiateChatConversationsWithUsers = function (userids) {
    return this.__hotel.initiateChatConversationsWithUsers(this.name, userids);
  };
  ChatUserMixin.prototype.getChatMessages = function (conversationid, oldestmessageid, howmany) {
    return this.__hotel.getChatMessages(this.name, conversationid, oldestmessageid, howmany);
  };
  ChatUserMixin.prototype.markMessageRcvd = function (conversationid, messageid) {
    return this.__hotel.markMessageRcvd(this.name, conversationid, messageid);
  };
  ChatUserMixin.prototype.markMessageSeen = function (conversationid, messageid) {
    return this.__hotel.markMessageSeen(this.name, conversationid, messageid);
  };
  ChatUserMixin.prototype.acknowledgeChatNotification = function (ntfobj) {
    var myntfobj = chatutilslib.notification2personal(ntfobj, this.name);
    if (myntfobj) {
      this.state.set('chatnotification', myntfobj);
    }
    return q(myntfobj);
  };

  ChatUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ChatUserMixin
      ,'getChatConversations'
      ,'initiateChatConversationsWithUsers'
      ,'getChatMessages'
      ,'sendChatMessage'
      ,'markMessageRcvd'
      ,'markMessageSeen'
      ,'acknowledgeChatNotification'
    );
  };

  return ChatUserMixin;
}

module.exports = createServiceMixin;
