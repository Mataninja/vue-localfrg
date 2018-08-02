const localForage = require('localforage');

const storage = {
  install(Vue, options) {
    Vue.prototype.$storage = {
      getItem(key) {
        return localForage.getItem(key);
      },
      setItem(key, value) {
        return localForage.setItem(key, value);
      },
      removeItem(key) {
        return localForage.removeItem(key);
      },
      clear() {
        return localForage.clear();
      },
      length() {
        return localForage.length();
      },
      key(keyIndex) {
        return localForage.key(keyIndex);
      },
      keys() {
        return localForage.keys();
      },
      iterate(callback) {
        return localForage.iterate(callback);
      },
      setDriver(driverName) {
        return localForage.setDriver(driverName);
      },
      config(options) {
        return new Promise(
            (resolve) => resolve(localForage.config(options)));
      },
      createInstance(oprions) {
        return new Promise(
            (resolve) => resolve(localForage.createInstance(options)));
      },
    };
  },
};

export default storage;