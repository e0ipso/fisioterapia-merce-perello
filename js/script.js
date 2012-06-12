/* Author: 

*/

function sectionSize() {
  $('section').css('min-height', $(window).height() + 'px');
}

//function displayTreatment(i) {
//  if (i == $('#treatments .treatment').length) i = 0;
//  setTimeout(function(){ $($('#treatments .treatment').get(i-1)).fadeOut(500, function () { $($('#treatments .treatment').get(i)).fadeIn(1000); }); displayTreatment(i+1); }, 3000);
//}

$(document).ready(function () {
  var initialLocation = $(document).attr('location').hash.substring(1) || 'home';
  $('.' + initialLocation).parent().addClass('active');
  $('.location').click(function () { $('.hover').removeClass('hover'); $(this).toggleClass('hover')});
  $('nav li a').click(function () { $('.active').removeClass('active'); $(this).parent().addClass('active')});
  sectionSize();
  $('h1').fitText(0.7);
  $('h2').fitText(1.2);

  if ($(window).width() > 960) {
      // Colorbox popups
//      $('#treatments .treatment a').each(function () {
//        var $expl = $(this).parent().find('.explanation');
//        $(this).colorbox({
//          inline: true,
//          width: '50%',
//          height: '50%',
//          href: $expl
//        });
//      });
    $("#show-facebook").colorbox({
      iframe:true,
      width:"600px",
      height:"600px"
    });
    $("#show-twitter").click(function (e) {
      $("#twtr-widget-1").slideToggle(1000, 'easeInOutExpo');
      e.preventDefault();
    });
    // Parallax Scroll
    $(function() {
        
        $.scrollingParallax('/img/body-2.svg', {
            bgHeight : '5252px',
            bgWidth : '2300px',
            staticSpeed : .25,
            staticScrollLimit : false
        });
    });
    // SlideDeck
    $('.slidedeck').slidedeck({
      start: 2 // Default open slide
    });
  }
  else {
    $('#show-facebook').attr('href', 'https://www.facebook.com/pages/Mercè-Perelló-Fisioteràpia/205104012886133');
    $('#show-twitter').attr('href', 'https://twitter.com/#!/rceperello');
    $('#description dl dt:first-of-type').addClass('active');
    $('#description dl dt').click(function () {
      if (this == $('#description dl dt.active').get(0)) { return false; };
      var $clicked = $(this);
      $('#description dl dt.active').removeClass('active').next('dd').slideUp(500, function () { $clicked.addClass('active').next('dd').slideDown(500); })
    });
  }
  $('abbr[title], input[title], img[title], a[title], li[title]').qtip({
     position: {
       my: 'bottom center',  // Position my top left...
       at: 'top center' // at the bottom left of...
     },
     style: {
       classes: 'ui-tooltip-cream ui-tooltip-shadow'
     }
  });
  // Scrolling for the navigation
  $('a[href*=#]').bind('click',function(event){
    var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500,'easeInOutExpo');
    event.preventDefault();
  });
  $('#slogans').cycle({fx: 'fade', speed: 2000});
  
  
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

});