// $(document).ready(function () {
//   $('[data-toggle="popover"]').popover();
//   $('#example').DataTable();
// });

// require('../vendor/jquery-3.3.1.min.js');
// require('../vendor/jquery.dataTables.min.js');

// $('#user-data').DataTable();

$('#btn-clear').on('click' , function(){
  $('input , select').val('');
});

$('#btn-submit').on('click' , function(){
  if($('.username').val() == 'sa' && $('.password').val() == 'dvssa'){
    alert('successfully logged in');
  }
});