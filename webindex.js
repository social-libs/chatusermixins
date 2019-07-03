function createLib (execlib) {
  return {
    sinks: {
      remote: require('./remotesinks')
    },
    methoddescriptors: {
      user: require('./methoddescriptors/user'),
      service: require('./methoddescriptors/serviceuser')
    }
  };
}

module.exports = createLib;
