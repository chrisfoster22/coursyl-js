// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require d3
//= require_tree .
$(function() {
  hideSection();
  $("#add-row").on("click", addRow);
  $("#update_course_button").on("click", greyOut);
  $(".delete-association").on("click", deleteRow);
  $(".date-stuff").on("click", datePicker);
  $(".date-stuff-2").on("click", datePicker2);
});

function greyOut(){
  // var button = document.getElementById("update_course_button");
  // setTimeout(function(){button.disabled = true;}, 1);

  $("#update_course_button").attr("disabled","disabled");
  $(".edit_course").submit();
}

function hideSection() {
  var section = $("div.container").last();
    section.css("display", "none");
  }

function addRow(){
  var section = $("div.container").last();
  section.css("display", 'block');
}


function deleteRow(event){
  $(event.target).closest(".association").css("display", "none");
}

function datePicker() {
  $('.date-stuff').datepicker();
}

function datePicker2() {
  $('.date-stuff-2').datepicker();
}
