var makeShrinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

makeShrinkyDancer.prototype = Object.create(makeDancer.prototype);
makeShrinkyDancer.prototype.constructor = makeBlinkyDancer;
makeShrinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggleClass('shrink');
};

  