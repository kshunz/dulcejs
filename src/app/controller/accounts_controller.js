define(['Cake/controller/controller'], function (Controller) {

  return new Controller('accountsController', function (Account) {

    this.uses = ['Account', 'User'];

    this.layout = 'fishy';

    this.index = function () {
      console.log('override INDEX');
    };

    this.overview = function () {
      console.log('OVERVIEW');
    };


  });

});