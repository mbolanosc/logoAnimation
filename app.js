window.addEventListener('load', init, false);
function init() {
  console.log('init');
  //var element = $("#mainsvg");
  TweenLite.to("#top-text", 1.5, {
    x: function(index) {
      console.log(index);
      return index + 0.3 * 100 // 100, 200, 300
    }
  });
	TweenLite.to("#underscore", 2, {opacity:0, display:"none"});


}
//weenLite.to($('#mydiv') , 0.3, {autoAlpha: 1, display:'block'});
