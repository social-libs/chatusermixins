function createUserRealmizerCreator (execlib, methoddescriptors, vararglib) {
  'use strict';

  function realmizeMethodDescriptors (realms) {
    return vararglib.realmizeMethodDescriptors(methoddescriptors.user.user, realms);
  }

  return realmizeMethodDescriptors;
}
module.exports = createUserRealmizerCreator;
