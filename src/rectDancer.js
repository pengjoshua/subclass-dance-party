var makeRectDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('makeRectDancer');
};
makeRectDancer.prototype = Object.create(makeDancer.prototype);
makeRectDancer.prototype.constructor = makeRectDancer;
makeRectDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.height = Math.random() * 100;
  this.width = Math.random() * 100;
  this.$node.css({'height': this.height + 'px', 'width': this.width + 'px'});
};