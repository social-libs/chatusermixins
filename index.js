function createLib (execlib) {
  return execlib.loadDependencies('client', ['social:chatbank:lib'], require('./libindex').bind(null, execlib));
}

module.exports = createLib;
