var makeMovingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.timeBetweenSteps += Math.random() * 1000;
  this.$node.css({
    'transition': 'top' + this.timeBetweenSteps / 1000 + 's, left ' + this.timeBetweenSteps / 1000 + 's'});
  this.moved = false;
};

makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;
makeMovingDancer.prototype.step = function() {
  if (this.moved) {
    setTimeout(this.step.bind(this), Math.random() * 1000);
    this.moved = false;
  } else {
    makeDancer.prototype.step.call(this);
    // $("body").height() and &('body').width() refers to the height and width of the browser window
    var randomTop = $('body').height() * Math.random(); 
    var randomLeft = $('body').width() * Math.random();
    this.top = randomTop;
    this.left = randomLeft;
    this.setPosition(randomTop, randomLeft);
    this.moved = true;
  }
};