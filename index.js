function createLib (execlib) {
  return execlib.loadDependencies('client', ['social:chatutils:lib'], require('./libindex').bind(null, execlib));
}

module.exports = createLib;
