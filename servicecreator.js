function createServiceMixin (execlib, chatutilslib) {
  'use strict';

  var lib = execlib.lib,
    q = lib.q,
    execSuite = execlib.execSuite;

  function ChatUserMixin () {
    if (!this.__hotel.chatConversationNotificationEvents) {
      throw new lib.Error('CHATHOTELMIXINSLIB_NOT_IMPLEMENTED_ON_HOTEL', 'Hotel must implement the social_chathotelmixinslib');
    }
  }
  ChatUserMixin.prototype.destroy = lib.dummyFunc;
  ChatUserMixin.prototype.acknowledgeChatNotification = function (realmname, ntfobj) {
    try {
      var myntfobj, myrcvdobj;
      myntfobj = chatutilslib.notification2personal(ntfobj, this.name);
      if (myntfobj) {
        this.state.set('chatnotification'+'On'+realmname, myntfobj);
      }
      myrcvdobj = chatutilslib.shouldNotificationBeMarkedAsRcvd(this.name, ntfobj);
      if (myrcvdobj) {
        //gotta markMessageRcvd
        //console.log('gotta markMessageRcvd', myrcvdobj);
        this.__hotel['markMessageRcvd'+'On'+realmname](myrcvdobj.userid, myrcvdobj.conversationid, myrcvdobj.messageid);
      }
    return q(myntfobj);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  ChatUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ChatUserMixin
      ,'getChatConversations'
      ,'initiateChatConversationsWithUsers'
      ,'getChatMessages'
      ,'sendChatMessage'
      ,'markMessageRcvd'
      ,'markMessageSeen'
      ,'editChatMessage'
      ,'acknowledgeChatNotification'
    );
  };

  return ChatUserMixin;
}

module.exports = createServiceMixin;
