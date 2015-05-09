describe('Framework CONTENTS (methods)', function() {
  var path = require('path'),
      appContents = require(path.join(appSrc, 'app', 'content'));

  it('should have a Router method', function() {
    expect(appContents.hasOwnProperty('router')).to.be.true;
  });
  it('should have a View method', function() {
    expect(appContents.hasOwnProperty('view')).to.be.true;
  });
});
