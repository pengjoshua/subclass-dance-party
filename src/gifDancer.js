var makeGifDancer = function(top, left, timeBetweenSteps, url, height, width) {
  makeDancer.call(this, top, left, 100);
  this.url = url;
  this.height = height;
  this.width = width;
  this.setCSS.call(this, url, height, width);
};

makeGifDancer.prototype = Object.create(makeDancer.prototype);
makeGifDancer.prototype.constructor = makeGifDancer;
makeGifDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

makeGifDancer.prototype.setCSS = function(url, height, width) {
  var settings = {
    'background': 'url(' + url + ')',
    'border': 'none',
    'position': 'absolute',
    'height': height + 'px',
    'width': width + 'px' 
  };
  this.$node.css(settings);
};

  