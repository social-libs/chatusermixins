function createChatUserUserMixin (execlib, methoddescriptors, vararglib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib;

  function ChatUserUserMixin () {
  }
  ChatUserUserMixin.prototype.destroy = lib.dummyFunc;
  /*
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
  */


  function addMethodsForRealm (klass, realm) {
    //TODO use vararglib
    realm = 'On'+realm;
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'sendChatMessage', 4, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'getChatConversations', 0, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'initiateChatConversationsWithUsers', 1, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'getChatMessages', 3, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'markMessageRcvd', 2, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'markMessageSeen', 2, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'editChatMessage', 3, 0, null, realm);
  }
  ChatUserUserMixin.addMethods = function (klass, realms) {
    if (!realms) {
      throw new lib.Error('REALM_NEEDED', 'ChatUserUserMixin cannot addMethods without realm(s)');
    }
    if (!lib.isArray(realms)) {
      addMethodsForRealm (klass, realms);
      return;
    }
    realms.forEach(addMethodsForRealm.bind(null, klass));
    klass = null;
  };

  /*
  function addMethodDescriptors (ret, realm) {
    //TODO use vararglib
    return ret;
  }

  ChatUserUserMixin.addMethodDescriptors = function (realm) {
    var ret = {}, _ret;
    if (lib.isArray(realm)) {
      _ret = ret;
      realm.forEach(addMethodDescriptors.bind(null, _ret));
      _ret = null;
      console.log('addMethodDescriptors', realm, '=>', ret);
      return ret;
    }
    addMethodDescriptors(ret, realm);
    return ret;
  };
  */

  ChatUserUserMixin.addMethodDescriptors = function (realms) {
    return vararglib.realmizeMethodDescriptors(methoddescriptors.user.user, realms);
  };

  ChatUserUserMixin.visiblefields = function (realms) {
    return realms.map(realmprefixerForVisibleFields);
  };
  
  function realmprefixerForVisibleFields (realm) {
    return 'chatnotification'+'On'+realm;
  }

  //['chatnotification'];

  return ChatUserUserMixin;
}

module.exports = createChatUserUserMixin;

