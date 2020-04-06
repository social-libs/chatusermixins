function createLib (execlib, methoddescriptors, vararglib) {
  return {
    methoddescriptors: {
      user: require('./methoddescriptors/userrealmizercreator')(execlib, methoddescriptors, vararglib)
    }
  };
}

module.exports = createLib;
