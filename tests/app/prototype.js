describe('APP prototype should have all methods from CONTENTS', function() {
  var constructor = require(appSrc + '/app/prototype');

  it('should have a router method', function() {
    expect(constructor.hasOwnProperty('router')).to.be.true;
  })
});
