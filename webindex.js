function createLib (execlib) {
  return {
    sinks: {
      remote: require('./remotesinks')
    },
    methoddescriptors: {
      user: require('./methoddescriptors/user')
    }
  };
}

module.exports = createLib;
