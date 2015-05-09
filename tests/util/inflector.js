describe('The INFLECTOR util', function() {
  var path = require('path'),
      sourceFile = __filename.replace('tests', 'src').replace('.js', ''),
      Inflector = require(sourceFile),
      inflector = new Inflector();

  it('should have a CAMELIZE mode', function() {
    expect(inflector.camelize).to.not.be.undefined;
    expect(inflector.camelize).to.be.a('function');
  });
  it('should have a DELIMITIZE mode', function() {
    expect(inflector.delimitize).to.not.be.undefined;
    expect(inflector.delimitize).to.be.a('function');
  });
  it('should have a MODELIZE mode', function() {
    expect(inflector.modelize).to.not.be.undefined;
    expect(inflector.modelize).to.be.a('function');
  });
  it('should have a UNDERSCORE mode (alias of delimitize)', function() {
    expect(inflector.underscore).to.not.be.undefined;
    expect(inflector.underscore).to.be.a('function');
  });

  describe('CAMELIZE mode', function() {
    it('should preserve capitalized words', function() {
      expect(inflector.camelize('ABCDEFG')).to.equal('ABCDEFG');
    });
    it('should convert cap words that are delimited', function() {
      expect(inflector.camelize('ABC_DEFG')).to.equal('abcDefg');
    });
    it('should convert dash-delimited words', function() {
      expect(inflector.camelize('abc-defg')).to.equal('abcDefg');
    });
    it('should convert underscore-delimited words', function() {
      expect(inflector.camelize('abc_defg')).to.equal('abcDefg');
    });
    it('should remove capitalization', function() {
      expect(inflector.camelize('Abc_defg')).to.equal('abcDefg');
    });
  });

  describe('DELIMITIZE mode', function() {
    it('should replace caps with a delimiter and lowercase', function() {
      expect(inflector.delimitize('abcDefg', '_')).to.equal('abc_defg');
      expect(inflector.delimitize('abCdefg', '_')).to.equal('ab_cdefg');
      expect(inflector.delimitize('abcdEfG', '_')).to.equal('abcd_ef_g');
      expect(inflector.delimitize('Abc', '_')).to.equal('_abc');
    });
    it('should have no effect on lowercase words', function() {
      expect(inflector.delimitize('abc_def', '_')).to.equal('abc_def');
      expect(inflector.delimitize('abc123', '_')).to.equal('abc123');
      expect(inflector.delimitize('abc_d-ef', '_')).to.equal('abc_d-ef');
    });
    it('should delimit with any specified delimiter', function() {
      expect(inflector.delimitize('abcDefg', '-')).to.equal('abc-defg');
      expect(inflector.delimitize('abcDefg', '*')).to.equal('abc*defg');
      expect(inflector.delimitize('abcDefg', '5')).to.equal('abc5defg');
      expect(inflector.delimitize('abcDefg', '&')).to.equal('abc&defg');
    });
  });

  describe('MODELIZE mode (converts controller names)', function() {
    var controller1 = 'accounts',
        controller2 = 'users',
        controller3 = 'shoes';

    it('should make plural words singular', function() {
      expect(inflector.modelize(controller1)).to.equal('Account');
      expect(inflector.modelize(controller2)).to.equal('User');
      expect(inflector.modelize(controller3)).to.equal('Shoe');
    });
    it('should capitalize the word', function() {
      expect(inflector.modelize(controller1)).to.equal('Account');
      expect(inflector.modelize(controller2)).to.equal('User');
      expect(inflector.modelize(controller3)).to.equal('Shoe');
    });
    it('should handle non-standard cases', function() {
      expect(inflector.modelize('people')).to.equal('Person');
      expect(inflector.modelize('lives')).to.equal('Life');
      expect(inflector.modelize('buses')).to.equal('Bus');
    });
    it('should handle names that have "Controller" inside', function() {
      expect(inflector.modelize('UsersController')).to.equal('User');
      expect(inflector.modelize('AccountsController')).to.equal('Account');
    });
  });

  describe('UNDERSCORE mode', function() {
    it('should replace caps with a delimiter and lowercase', function() {
      expect(inflector.underscore('abcDefg')).to.equal('abc_defg');
      expect(inflector.underscore('abCdefg')).to.equal('ab_cdefg');
      expect(inflector.underscore('abcdEfG')).to.equal('abcd_ef_g');
      expect(inflector.underscore('Abc')).to.equal('_abc');
    });
    it('should have no effect on lowercase words', function() {
      expect(inflector.underscore('abc_def')).to.equal('abc_def');
      expect(inflector.underscore('abc123')).to.equal('abc123');
      expect(inflector.underscore('abc_d-ef')).to.equal('abc_d-ef');
    });
  });
});
