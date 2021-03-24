$(function() {

    $(".accordian div").hide();

  $(".accordian li").on("click", function() {
      $('ul.accordian div').not($(this).children('ul.accordian div')).slideUp();
    $(this).children('ul.accordian div').slideToggle(300);
    return false;
  });

    });






