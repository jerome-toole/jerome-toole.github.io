// Off Canvas Sliding
$(document).ready(function(){
  // Menu button click
  $('#js-menu-trigger,#js-menu-screen').on('click touchstart', function(e){
    // $('#js-body').toggleClass('no-scroll');
    $('#js-menu, #js-menu-screen').toggleClass('is-visible');
    $('#js-menu-trigger').toggleClass('slide close');
    // $('#masthead, #page-wrapper').toggleClass('slide');
    e.preventDefault();
  });
  
  var supportsMixBlendMode = window.getComputedStyle(document.body).mixBlendMode;
  if(!supportsMixBlendMode) {
    $('.logo').css('opacity', '0.8');
  }

  var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
  if(iOS){
    $('.billboard').css('height', $(window).height()+'px');
  }
  
  $("#main").fitVids();

  $("#markdown-toc").prepend("<li><h6>Overview</h6></li>");
});
