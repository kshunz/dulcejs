describe('APP prototype', function() {
  var filename = path.basename(__filename, '.js');
  var constructor = require(sourceFiles[filename]);

  xit('should have a ROUTER method', function() {
    expect(constructor.hasOwnProperty('router')).to.be.true;
  });
  xit('should have a DEBUG method', function() {
    expect(constructor.hasOwnProperty('debug')).to.be.true;
  });
});
