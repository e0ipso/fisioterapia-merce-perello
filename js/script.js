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
       at: 'top center' // at the bottom left of...
     },
     style: {
       classes: 'ui-tooltip-cream ui-tooltip-shadow'
     }
  });
  $("#block-1").qtip({
    position: {
      my: 'middle left',
      at: 'middle right'
    },
    style: {
      classes: 'ui-tooltip-dark ui-tooltip-shadow ui-tooltip-big'
    },
    content: $('#block-1 .tooltip').text()
  });
  $("#block-2").qtip({
    position: {
      my: 'bottom center',
      at: 'top center'
    },
    style: {
      classes: 'ui-tooltip-dark ui-tooltip-shadow ui-tooltip-big'
    },
    content: $('#block-2 .tooltip').text()
  });
  $("#block-3").qtip({
    position: {
      my: 'middle right',
      at: 'middle left'
    },
    style: {
      classes: 'ui-tooltip-dark ui-tooltip-shadow ui-tooltip-big'
    },
    content: $('#block-3 .tooltip').text()
  });
  // Colorbox popups
  $("#show-facebook").colorbox({
    iframe:true,
    width:"600px",
    height:"600px"
  });
  $("#show-twitter").click(function (e) {
    $("#twtr-widget-1").slideToggle(1000, 'easeInOutExpo');
    e.preventDefault();
  });
//   Declare parallax on layers
//  jQuery('.parallax-layer').parallax({
//    mouseport: jQuery("#port")
//  });
  // Scrolling for the navigation
  $('a[href*=#]').bind('click',function(event){
    var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 3000,'easeInOutExpo');
    event.preventDefault();
  });
  
  // Google Maps code
  var mallorca = new google.maps.LatLng(39.761723, 3.162496),
    pointToMoveTo, 
    first = true,
    curMarker = new google.maps.Marker({}),
    $el;
  
  var myOptions = {
    zoom: 10,
    center: mallorca,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  var map = new google.maps.Map($("#map_canvas")[0], myOptions);
  
  $("#locations li").mouseenter(function() {
  
    $el = $(this);
    
    if (!$el.hasClass("hover")) {
    
      $("#locations li").removeClass("hover");
      $el.addClass("hover");
      
      if (!first) { 
      
        // Clear current marker
        curMarker.setMap(); 
        
        // Set zoom back to Mallorca level
        // map.setZoom(10);
      }
      
      // Move (pan) map to new location
      pointToMoveTo = new google.maps.LatLng($el.attr("data-geo-lat"), $el.attr("data-geo-long"));
      map.panTo(pointToMoveTo);
      
      // Add new marker
      curMarker = new google.maps.Marker({
        position: pointToMoveTo,
        map: map,
        icon: "./img/marker.png"
      });
      
      // On click, zoom map
      google.maps.event.addListener(curMarker, 'click', function() {
        map.setZoom(14);
      });
      
      // Fill more info area
      $("#more-info")
        .find("h2")
        .html($el.find("h3").html())
        .end()
        .find("p")
        .html($el.find(".longdesc").html());
      
        // No longer the first time through (re: marker clearing)        
        first = false; 
    }
  
  });
  
  $("#locations li:first").trigger("mouseenter");
  var list = [];
  $('ul#txtlzr-data-1 li').each(function () { list.push($(this).text()) });
  var txtlizer = $('#txtlzr-container-1');
  txtlizer.textualizer(list);
  txtlizer.textualizer('start');
});