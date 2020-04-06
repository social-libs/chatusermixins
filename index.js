function createLib (execlib) {
  return execlib.loadDependencies('client', ['social:chatutils:lib', 'social:chatmethoddescriptors:lib', 'allex:varargfunctionhandler:lib'], require('./libindex').bind(null, execlib));
}

module.exports = createLib;
