function createServiceMixin (execlib) {
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
  ChatUserMixin.prototype.acknowledgeChatNotification = function (ntfobj) {
    this.state.set('chatnotification', ntfobj);
    return q(ntfobj);
  };

  ChatUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ChatUserMixin,
      'sendChatMessage',
      'acknowledgeChatNotification'
    );
  };

  return ChatUserMixin;
}

module.exports = createServiceMixin;
