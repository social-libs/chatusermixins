function createServiceMixin (execlib) {
  'use strict';

  var lib = execlib.lib,
    execSuite = execlib.execSuite;

  function ChatUserMixin () {
    //this.askForRemote('Chat');
    if (!lib.isFunction(this.__hotel.findUnreadChatForUser)) {
      throw new lib.Error('CHATHOTELMIXINSLIB_NOT_IMPLEMENTED_ON_HOTEL', 'Hotel must implement the social_chathotelmixinslib');
    }
    this.getUnreadChat();
  }
  ChatUserMixin.prototype.destroy = lib.dummyFunc;
  ChatUserMixin.prototype.sendChatMessage = function (messageobj) {
    messageobj.from = messageobj.from || {};
    messageobj.from.name = this.name;
    messageobj.from.role = this.state.get('profile_role');
    return this.__hotel.sendChatMessage(messageobj);
  };
  ChatUserMixin.prototype.getUnreadChat = function () {
    //this.__hotel.findUnreadChatForUser(this.name).then(this.state.set.bind(this.state, 'unreadchat'));
    this.__hotel.findUnreadChatForUser(this.name).then((uc) => {
      this.state.set('unreadchat', uc);
    });
  };

  ChatUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ChatUserMixin,
      'sendChatMessage',
      'getUnreadChat'
    );
  };

  return ChatUserMixin;
}

module.exports = createServiceMixin;
