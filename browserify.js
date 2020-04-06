var lR = ALLEX.execSuite.libRegistry;
lR.register('social_chatusermixinslib', require('./webindex')(ALLEX, lR.get('social_chatmethoddescriptorslib'), lR.get('allex_varargfunctionhandlerlib')));
