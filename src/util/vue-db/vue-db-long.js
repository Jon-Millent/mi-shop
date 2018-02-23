/**
 * Created by HP on 2018/1/21.
 */
class VueDB{
  constructor () {
  }

  setItem (key, value) {
    if(typeof value == 'object')
      value = JSON.stringify(value);

    if(window.localStorage){
      window.localStorage.setItem(key,value);
    }
  }

  removeItem (key) {
    if(window.localStorage){
      window.localStorage.removeItem(key);
    }
  }

  getItem (key) {
    var now = '';
    if(window.localStorage){
      now = window.localStorage.getItem(key);
    }

    return {
      toString () {
        return now;
      },
      toJson () {
        var tryObj = {};
        try{
          tryObj = JSON.parse(now)
        }catch (e){
          tryObj = null;
        }
        return tryObj;
      },
      toNumber() {
        return parseFloat(now);
      }
    }

  }

  getItemOnce (key) {
    var now = this.getItem(key);
    this.removeItem(key);
    return {
      toString () {
        return now;
      },
      toJson () {
        var tryObj = {};
        try{
          tryObj = JSON.parse(now)
        }catch (e){
          tryObj = null;
        }
        return tryObj;
      },
      toNumber() {
        return parseFloat(now);
      }
    }
  }

}


export default VueDB;
