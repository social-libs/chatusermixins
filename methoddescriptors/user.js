module.exports = {
  sendChatMessage: [{
    name: 'To Group',
    type: 'string'
  },{
    name: 'To',
    type: 'string'
  },{
    name: 'Msg',
    type: 'string'
  }],
  getChatConversations: true,
  initiateChatConversationsWithUsers: [{
    name: 'User IDs',
    type: ['array', 'null']
  }],
  getChatMessages: [{
    name: 'Conversation ID',
    type: 'string'
  },{
    name: 'Oldest Message ID',
    type: ['number', 'null']
  },{
    name: 'How Many',
    type: ['number', 'null']
  }],
  markMessageRcvd: [{
    name: 'Conversation ID',
    type: 'string'
  },{
    name: 'Message ID',
    type: 'number'
  }],
  markMessageSeen: [{
    name: 'Conversation ID',
    type: 'string'
  },{
    name: 'Message ID',
    type: 'number'
  }]
};
