function createServiceMixin (execlib, chatbanklib) {
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
  ChatUserMixin.prototype.getChatMessages = function (conversationid, oldestmessageid, howmany) {
    return this.__hotel.getChatMessages(this.name, conversationid, oldestmessageid, howmany);
  };
  ChatUserMixin.prototype.acknowledgeChatNotification = function (ntfobj) {
    var mymessage = chatbanklib.utils.userandmidder(!ntfobj.p2p, this.name, ntfobj.mids[1], lib.extend({}, ntfobj.lastmessage)),
      myntfobj = lib.pickExcept(ntfobj, ['lastmessage', 'p2p', 'affected']);
    myntfobj.lastmessage = mymessage;
    /*
    console.log(this.name, 'acknowledgeChatNotification');
    console.log(ntfobj);
    console.log('=>');
    console.log(myntfobj);
    */
    this.state.set('chatnotification', myntfobj);
    return q(myntfobj);
  };

  ChatUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ChatUserMixin
      ,'getChatConversations'
      ,'getChatMessages'
      ,'sendChatMessage'
      ,'acknowledgeChatNotification'
    );
  };

  return ChatUserMixin;
}

module.exports = createServiceMixin;
