/**
 * Created by HP on 2018/1/4.
 */

class Rem{
  constructor(){
    this.render();
  }
  render() {
    var SCREENTYPE = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var DEFINENUMBER = 10;
    function setView(){
      var gg = document.documentElement;
      var width = gg.clientWidth;
      if(gg.clientWidth > 720){
        width = 720;
      }else if(gg.clientWidth < 320){
        width = 320;
      }
      gg.style.fontSize = width / DEFINENUMBER + 'px';
      return setView;
    }
    window.addEventListener(SCREENTYPE,setView());
    document.addEventListener('touchstart',function (event) {
      if(event.touches.length>1){
        event.preventDefault();
      }
    })
    var lastTouchEnd=0;
    document.addEventListener('touchend',function (event) {
      var now=(new Date()).getTime();
      if(now-lastTouchEnd<=300){
        event.preventDefault();
      }
      lastTouchEnd=now;
    },false);
  }
}


export default Rem;
