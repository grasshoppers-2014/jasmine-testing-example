function Cookie(requiredBakeTime) {
  this.doneness = "raw";
  this.bakedFor = 0;
  this.requiredBakeTime = requiredBakeTime;
}

Cookie.prototype.bake = function(bakeTime) {
  this.bakedFor += bakeTime;
  this.doneness = this.calculateDoneness();
}

Cookie.prototype.calculateDoneness = function() {
  if(this.bakedFor < this.requiredBakeTime) {
    return 'still_gooey';
  }
}