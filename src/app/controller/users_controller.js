define(['Cake/controller/controller'], function (Controller) {

  return Controller('usersController', function () {

//		this.uses(['User']);

    this.index = function () {
      console.log('I love USERS!!');
      this.autoRender = false;
    };

  });
});