function createLib (execlib, chatbanklib) {
  return execlib.lib.extend({
    mixins: {
      service: require('./servicecreator')(execlib, chatbanklib),
      user: require('./users/usercreator')(execlib),
      serviceuser: require('./users/serviceusercreator')(execlib)
    }
  }, require('./webindex')(execlib));
}

module.exports = createLib;
