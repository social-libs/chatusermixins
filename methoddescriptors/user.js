module.exports = {
  sendChatMessage: [{
    title: 'Message Object',
    type: 'object',
    required: ['to', 'message'],
    properties: {
      to: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {type: 'string'},
          role: {type: 'string'},
          realm: {type: 'string'}
        }
      },
      from: {
        type: ['object', 'null'],
        properties: {
          name: {type: 'string'},
          role: {type: 'string'},
          realm: {type: 'string'}
        }
      },
      message: {type: 'string'}
    }
  }]
};
