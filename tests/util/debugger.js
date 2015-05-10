describe('Debug', function() {
  var filename = path.basename(__filename, '.js');
  var debug = require(sourceFiles[filename]);

  //@TODO:Add more tests when debug become more than console log
  it('should be nothing but a console log at the moment', function() {
    expect(true).to.be.true;
  });
});
