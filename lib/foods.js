$('document').ready(function() {
  $("#add-food").on('click', function() {
    $('#name-field .validation-error').html('Please Enter a Name');
    $('#calories-field .validation-error').html('Please Enter Calories');
  })
})
