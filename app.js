window.addEventListener('load', init, false);
function init() {
  console.log('init');
  var timeLineMax = new TimelineMax();
  //timeLineMax.staggerTo(".mainC", 1, {rotation:360, y:20}, 0.5);
  timeLineMax.staggerTo(".path-letter", 0.4, {autoAlpha:0, scale:1,rotate:2}, 0.1);
  function redo(){
    console.log('hola');
  }
  //tm.from(".letterZ", 1, {opacity:0, ease:Power3.easeOut, repeat:-1, yoyo:true});

  //var element = $("#mainsvg");
//{opacity:0.5, rotation:45})
//TweenMax.to(element, 1, {opacity:0, onComplete:completeHandler, ease:Back.easeOut, useFrames:true});
/*function startAnimation(){
  TweenLite.set($startAnim, {autoAlpha:0});

  //TweenMax.staggerFromTo( $demoText.find("span"), 0.4, {autoAlpha:0, scale:0}, {autoAlpha:1, scale:1}, 0.1, reset );

  TweenMax.staggerFromTo( $demoText.find("span"), 0.4, {autoAlpha:0, scale:7}, {autoAlpha:1, scale:1}, 0.1, reset );	*/

  //TweenMax.staggerFromTo(".path-letter".find("span"), 0.4, {autoAlpha:0, scale:0}, {autoAlpha:1, scale:1}, 0.1, reset );
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
