function createChatUserUserMixin (execlib, methoddescriptors, vararglib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib;

  function ChatUserUserMixin () {
  }
  ChatUserUserMixin.prototype.destroy = lib.dummyFunc;

  function addMethodsForRealm (klass, realm) {
    realm = 'On'+realm;
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'sendChatMessage', 4, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'getChatConversations', 0, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'initiateChatConversationsWithUsers', 1, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'getChatMessages', 3, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'markMessageRcvd', 2, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'markMessageSeen', 2, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'editChatMessage', 4, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'reportChatActivity', 1, 0, null, realm);
    vararglib.userUserPrototype2ServiceWithName2HotelMethod(klass.prototype, 'createNewChatGroupWithMembers', 2, 0, null, realm);
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

