define(['Cake/controller/controller'], function (Controller) {

  return new Controller('WizardsController', function () {
    this.doYouNeedAnAccount = function () {
      console.log('DYNAA controller action');
    };
  });

});