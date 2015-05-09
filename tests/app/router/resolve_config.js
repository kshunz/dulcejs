describe('Configuration Resolver', function() {
  var route = 'users/survey',
      routeStartingSlash = '/accounts/registration',
      routeNoSlash = 'addresses',
      path = require('path'),
      sourceFile = __filename.replace('tests', 'src').replace('.js', ''),
      resolveConfig = require(sourceFile),
      cfg = resolveConfig();

  it('should be a function', function() {
    expect(resolveConfig).to.be.a('function');
  });
  it('should return an object', function() {
    expect(cfg(route)).to.be.an('object');
    expect(cfg(routeStartingSlash)).to.be.an('object');
    expect(cfg(routeNoSlash)).to.be.an('object');
  });
  it('should parse a controller name from the route', function() {
    expect(cfg(route).controller).to.equal('usersController');
    expect(cfg(routeStartingSlash).controller).to.equal('accountsController');
    expect(cfg(routeNoSlash).controller).to.equal('addressesController');
  });
  it('should parse an action name from the route', function() {
    expect(cfg(route).action).to.equal('survey');
    expect(cfg(routeStartingSlash).action).to.equal('registration');
    expect(cfg(routeNoSlash).action).to.equal('index');
  });
});
