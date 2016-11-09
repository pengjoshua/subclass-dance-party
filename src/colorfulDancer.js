var makeColorfulDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

makeColorfulDancer.prototype = Object.create(makeDancer.prototype);
makeColorfulDancer.prototype.constructor = makeColorfulDancer;
makeColorfulDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var rgbaString = 'rgba(' + red + ',' + green + ',' + blue + ', 1)';
  this.$node.css({'border-color': rgbaString});
};