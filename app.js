window.addEventListener('load', init, false);
function init() {
  console.log('init');
  //var element = $("#mainsvg");
  //first text from left 2 right
  TweenLite.to("#top-text", 1.5, {
    x: function(index) {
      console.log(index);
      return index + 0.3 * 85 // 100, 200, 300
    }
  });
	//underscore display
	TweenLite.to("#underscore", 2, {opacity:0, display:"none"});
	//second text from right 2 left
	TweenLite.to("#second-text", 1.5, {
    x: function(index) {
      console.log(index);
      return index - 0.2 * 75 // 100, 200, 300
    }
  });



}
//weenLite.to($('#mydiv') , 0.3, {autoAlpha: 1, display:'block'});
