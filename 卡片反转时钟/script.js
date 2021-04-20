var Flipper = (function(){
  function Flipper(node,currentTime,nexrTime){
    this.isFlipping = false;
    this.duration = 600;
    this.flipNode = node;
    this.frontNode = node.querySelector(".front");
    this.backNode = node.querySelector(".back");
    this.setFrontTime(currentTime)
    this.setBackTime(nexrTime)
  }
  Flipper.prototype.setFrontTime = function(time){
    this.frontNode.dataset.number = time;
  };
  Flipper.prototype.setBackTime = function(time){
    this.backNode.dataset.number = time;
  };
  Flipper.prototype.flipDown = function(currentTime,nexrTime){
    var _this = this
    if(this.isFlipping){
      return false
    }
    this.isFlipping = true;
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime)
    console.log('test')
    this.frontNode.classList.add("running")
    setTimeout(function(){
      _this.frontNode.classList.remove("running");
      _this.isFlipping = false;
      _this.setFrontTime(nexrTime);
    },this.duration)
  }
  return Flipper;
}())

var getTimeFromDate = function(date) {
  return date
      .toTimeString()
      .slice(0, 8)
      .split(":")
      .join("");
};
var flips = document.querySelectorAll(".flip");
var now = new Date();
var nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
var nextTimeStr = getTimeFromDate(now);
var flippers = Array.from(flips).map(function(flip,i) {return new Flipper(flip,nowTimeStr[i],nextTimeStr[i])})
setInterval(function() {
  var now =new Date();
  var nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
  var nextTimeStr = getTimeFromDate(now);
  for(var i=0; i < flippers.length; i++) {
      if(nowTimeStr[i] === nextTimeStr[i]) {
          continue;
      }
      flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
  }
},1000);