var app = angular.module('toDoApp')

app.directive('tdEnterTask', function() {
  return {
    template: "<div class='container'><section class='content bgcolor-5'> <h2>Yoko</h2> <span class='input input--minoru'> <input class='input__field input__field--yoko' type='text' id='input-16' /> <label class='input__label input__label--yoko' for='input-16'> <span class='input__label-content input__label-content--yoko'>Street</span> </label> </span> <span class='input input--minoru'> <input class='input__field input__field--yoko' type='text' id='input-17' /> <label class='input__label input__label--yoko' for='input-17'> <span class='input__label-content input__label-content--yoko'>City</span> </label> </span> <span class='input input--minoru'> <input class='input__field input__field--yoko' type='text' id='input-18' /> <label class='input__label input__label--yoko' for='input-18'> <span class='input__label-content input__label-content--yoko'>Region</span> </label> </span> </section></div>"
  };
});
