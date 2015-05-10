describe('The framework UTIL prototype', function() {
  //@TODO: Make better. This is a sloppy auto-inclusion
  var path = require('path'),
      sourceFile = __filename.replace('tests', 'src').replace('.js', ''),
      util = require(sourceFile);

  it('should have an INFLECTOR', function() {
    expect(util.inflector).to.not.be.undefined;
    expect(util.inflector).to.be.a('function');
  });

  it('should have a DEBUGGER', function() {
    expect(util.debug).to.not.be.undefined;
    expect(util.debug).to.be.a('function');
  });
});
