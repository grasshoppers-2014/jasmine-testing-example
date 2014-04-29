describe("Cookie", function() {
  it("is raw when it is first created", function() {
    var cookie = new Cookie();
    expect(cookie.doneness).toEqual("raw");
  });
  
  it("is 'still_gooey' when baked for less than required bake time", function() {
    var cookie = new Cookie(10);
    cookie.bake(5);
    expect(cookie.doneness).toEqual('still_gooey');
  });
  
  describe("when baking cookies", function() {
    it("has zero bake time when it has yet to be baked", function() {
        var cookie = new Cookie();
        expect(cookie.bakedFor).toEqual(0);      
    });
    
    it("persists the bake time given", function() {
      var cookie = new Cookie();
      cookie.bake(10);
      expect(cookie.bakedFor).toEqual(10);
    });
    
    it("baking is an additive function", function() {
      var cookie = new Cookie();
      cookie.bake(10);
      cookie.bake(10);
      expect(cookie.bakedFor).toEqual(20);
    })
  });
  
  describe("when calculating doneness", function() {
    it("is 'still_gooey' when baked for less than required bake time", function() {
      var cookie = new Cookie(10);
      cookie.bake(5);
      expect(cookie.calculateDoneness()).toEqual('still_gooey');
    })
  })
});