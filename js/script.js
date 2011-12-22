/* Author: 

*/

function sectionSize() {
  $('section').height($(window).height());
}

$(document).ready(function () {
  var initialLocation = $(document).attr('location').hash.substring(1) || 'home';
  $('.' + initialLocation).parent().addClass('active');
  $('.location').click(function () { $('.hover').removeClass('hover'); $(this).toggleClass('hover')});
  $('nav li a').click(function () { $('.active').removeClass('active'); $(this).parent().addClass('active')});
  sectionSize();
  $('h1').fitText(0.7);
  $('h2').fitText(1.2);
  $('abbr[title], input[title], img[title], a[title], li[title]').qtip({
     position: {
       my: 'bottom center',  // Position my top left...
       at: 'top center', // at the bottom left of...
     },
     style: {
       classes: 'ui-tooltip-cream ui-tooltip-shadow'
     }
  });
  // Declare parallax on layers
      jQuery('.parallax-layer').parallax({
          mouseport: jQuery("#port")
      });
  $("section").scrollable({ vertical: true, mousewheel: true });
});