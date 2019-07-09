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
  getChatMessages: [{
    name: 'Conversation ID',
    type: 'string'
  },{
    name: 'Oldest Message ID',
    type: ['number', 'null']
  },{
    name: 'How Many',
    type: ['number', 'null']
  }]
};
