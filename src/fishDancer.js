var fishDancer = function(top, left, timeBetweenSteps, color, speed) {
  makeDancer.apply(this, arguments);
  this.color = color; 
  this.speed = speed;

  var currFish = '<img class="dancer" src= ' + this.imageStorage[this.color]  + '/>';
  this.$node = $(currFish);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.pickImage(this.color);
};

fishDancer.prototype = Object.create(makeDancer.prototype);
fishDancer.prototype.constructor = makeBlinkyDancer;

var oldStep = makeDancer.prototype.step;

fishDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  //console.log('first', this.$node);
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //console.log('second', this.$node);
  this.$node.toggle();
};

fishDancer.prototype.turn = 


fishDancer.prototype.pickImage = function(color) {
  if (color === 'blue') {

  }
}