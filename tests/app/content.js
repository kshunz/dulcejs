describe('Framework CONTENTS (methods)', function() {
  var path = require('path'),
      appContents = require(path.join(appSrc, 'app', 'contents'));

  it('should have a Router', function() {
    expect(appContents.hasOwnProperty('router')).to.be.true;
  });
});
