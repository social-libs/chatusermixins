function createLib (execlib, chatutilslib, methoddescriptors, vararglib) {
  return execlib.lib.extend({
    mixins: {
      service: require('./servicecreator')(execlib, chatutilslib, vararglib),
      user: require('./users/usercreator')(execlib, methoddescriptors, vararglib),
      serviceuser: require('./users/serviceusercreator')(execlib)
    },
    methoddescriptors: {
      service: methoddescriptors.user.service
    }
  }, require('./webindex')(execlib, methoddescriptors, vararglib));
}

module.exports = createLib;
