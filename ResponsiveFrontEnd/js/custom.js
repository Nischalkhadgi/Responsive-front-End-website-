
// Slider 1 Slide Text Animation
$(function(){
  $("#slide1-top-anim").addClass('animated fadeInUp');
  $("#slide1-bottom-anim").addClass('animated fadeInUp');

  $('.carousel').bind('slid.bs.carousel', function (e) {
      if($('#item2').hasClass('active') || $('#item3').hasClass('active')){
        $("#slide1-top-anim").removeClass('animated fadeInUp');
        $("#slide1-bottom-anim").removeClass('animated fadeInUp');
      }else{
        $("#slide1-top-anim").addClass('animated fadeInUp');
        $("#slide1-bottom-anim").addClass('animated fadeInUp');
      }
   });

});



// Slider 2 Slide Text Animation
$(function(){

  $('.carousel').bind('slid.bs.carousel', function (e) {
      if($('#item1').hasClass('active') || $('#item3').hasClass('active')){
        $("#slide2-top-anim").removeClass('animated fadeInUp');
        $("#slide2-bottom-anim").removeClass('animated fadeInUp');
      //  $('.bs-slider-overlay').css({'background-color': 'transparent'});

      }else{
        $("#slide2-top-anim").addClass('animated fadeInUp');
        $("#slide2-bottom-anim").addClass('animated fadeInUp');
      //  $('.bs-slider-overlay').css({'background-color': 'rgba(0, 0, 0, 0)'});
      }
   });

});




// Slider 3 Slide Text Animation
$(function(){

  $('.carousel').bind('slid.bs.carousel', function (e) {
      if($('#item1').hasClass('active') || $('#item2').hasClass('active')){
        $("#slide3-top-anim").removeClass('animated fadeInUp');
        $("#slide3-bottom-anim").removeClass('animated fadeInUp');
      }else{
        $("#slide3-top-anim").addClass('animated fadeInUp');
        $("#slide3-bottom-anim").addClass('animated fadeInUp');
      }
   });

});




//WOW JS
$(function(){
    new WOW().init();
});



//STATS SECTION

$(function(){

  $('.parallax-window').parallax({imageSrc: 'img/parallax/1.jpg'});

});


// STATS
$('.counter').counterUp({
    delay:10,
    time:3000
});


//DIVIDER 2
$(function(){
  $('.parallax-window2').parallax({imageSrc: 'img/parallax/3.jpg'});
});



//CLIENTS
$(function(){
    $("#clients-list").owlCarousel({
        items:7,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        responsive:{
            0 : {
            items:1
            },
            480 : {
              items:3
            },
            768 : {
              items:5
            },
            992 : {
              items:6
            }
        }
    });
});



//NavBar

 //Example:    var scroll = $(this).scrollTop();     console.log(scroll);

$(function(){

      $(window).scroll(function(){
          if( $(this).scrollTop() < 50){
                  // Hide canvas-top-nav class
                  $('nav').removeClass('canvas-top-nav');

                  //Changing logo height when scroll is greater than 50
                  document.getElementById("nav-logo").setAttribute("style","height:100px;   transition: all .5s ease-in-out;");

                  // Nav menu color was blue sooo when the scroll is at top it should be white
                  $('.smooth-scroll').addClass('color-white');

                  //Hide #back-to-top Button
                  $('#back-to-top').fadeOut();

          }else{
                  // Add canvas-top-nav
                  $('nav').addClass('canvas-top-nav');

                  //Changing logo height when scroll is greater than 50
                  document.getElementById("nav-logo").setAttribute("style","height:64px;   transition: all .5s ease-in-out;");

                  // Removing the color-white class so that scroll spy can come to effect
                  $('.smooth-scroll').removeClass('color-white');

                  //Show #back-to-top Button
                  $('#back-to-top').fadeIn();
              }

      });

});

// Maing canvas-top-nav appear when the page is refresh and scroll position is in middle sections
//While Refreshing page the follwing effects gonna take place
$(function(){
    if($(window).scrollTop() > 10){
          $('nav').addClass('canvas-top-nav');
          document.getElementById("nav-logo").setAttribute("style","height:64px;   transition: all .5s ease-in-out;");

          // Removing the color-white class so that scroll spy can come to effect
          $('.smooth-scroll').removeClass('color-white');


    }else{
          // Nav menu color was blue sooo when the scroll is at top it should be white
          $('.smooth-scroll').addClass('color-white');

          //Hide #back-to-top Button
          $('#back-to-top').fadeOut();

         }

});



// Smooth Scrolling
$(function(){
    $('a.smooth-scroll').click(function(event){
        event.preventDefault();
        //The preventDefault() method cancels the event if it is cancelable,
        // meaning that the default action that belongs to the event will not occur.
      /*  For example, this can be useful when:
          Clicking on a "Submit" button, prevent it from submitting a form
          Clicking on a link, prevent the link from following the URL  */

        // return id, for e.g. #home, #about, #work
        var section = $(this).attr("href");
      //  console.log($(section).offset().top+"");
      //  alert(section);
        $('html, body').animate({
            scrollTop: $(section).offset().top - 59
          }, 1250, "easeInOutExpo");

        /*
             $(".myClass").animate({
                marginLeft: "30em"
              }).promise().done(function(){
                alert("Done animating");
              });
        */

    });
});


//Closing nav menu when nav item clicked

$(function(){

     $(window).resize(function() {
        var width = $(window).width();
    
        if(width < 1200){
            $('#canvas-menu ul li a').on("click touch",function(){
        
              $('.navbar-toggle').click();
            
          });
        }

      });

});



/*
// Click Event in nav button

$(function(){
          var x = false;
    $('.navbar-toggle').click(function(){

      if($('nav').hasClass('canvas-top-nav')){

      }else{

        if(x == false){
          $('.navbar-fixed-top').css({'background':'rgba(0,0,0,0.7)'});
           x= true;
        }else{

            //  if($('.nav').hasClass('canvas-top-nav')){

            //  }else{
                 $('.navbar-fixed-top').css({'background':'none'});
                  x= false;
             // }

             }
        }

       //$('.navbar-fixed-top').css({'background':'rgba(0,0,0,0.7)'});

    });

});

*/
// Nav Bar On Screen Change
$(function(){
  $(window).resize(function() {
    var width = $(window).width();
    var height = $(window).height();
    console.log(width);

  });
});


