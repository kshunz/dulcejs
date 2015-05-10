describe('DULCEJS FRAMEWORK', function() {
  var fw = require('../src/dulce');

  it('should have an APP object', function() {
    expect(fw.app).to.not.be.undefined;
    expect(fw.app).to.be.an('object');
  });
  it('should have an CORE object', function() {
    expect(fw.core).to.not.be.undefined;
    expect(fw.core).to.be.an('object');
  });
  it('should have an UTIL object', function() {
    expect(fw.util).to.not.be.undefined;
    expect(fw.util).to.be.an('object');
  });

  describe('ALIAS methods', function() {
    it('should expose the router', function() {
      expect(fw.route).to.not.be.undefined;
      expect(fw.route).to.be.a('function');
    });
    it('should expose the debugger', function() {
      expect(fw.debug).to.not.be.undefined;
      expect(fw.debug).to.be.a('function');
    });
  });
});
