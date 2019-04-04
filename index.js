function createLib (execlib) {
  return execlib.lib.extend({
    mixins: {
      service: require('./servicecreator')(execlib),
      user: require('./users/usercreator')(execlib)
    }
  }, require('./webindex')(execlib));
}

module.exports = createLib;