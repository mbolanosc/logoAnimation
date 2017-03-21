window.addEventListener('load', init, false);
function init() {
  console.log('init');
  var timeLineMax = new TimelineMax();
  //timeLineMax.staggerTo(".mainC", 1, {rotation:360, y:20}, 0.5);
  timeLineMax.staggerTo(".path-letter", 0.4, {autoAlpha:0, scale:1,rotate:2}, 0.1);
  function redo(){
    console.log('hola');
  }
  TweenLite.to("#top-text", 3, {
    x: function(index) {
      console.log(index);
      return index + 0.1 * 100 // 100, 200, 300
    }
  });
	//second text from right 2 left
	TweenLite.to("#second-text",4, {
    x: function(index) {
      console.log(index);
      return index - 0.2 * 75 // 100, 200, 300
    }

});

}
