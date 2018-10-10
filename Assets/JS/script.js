 $(document).ready(FixMenuOnScrollSticky);
 $(document).ready(ToggleSlickNav);
 $(document).ready(SmoothScroll);
 $(document).ready(wrapInDiv);
 $(window).resize(wrapInDiv);
 $(document).ready(UnwrapAll);
 $(window).resize(UnwrapAll);



 function wrapInDiv() {
     var $window = $(window),
         $html = $('ul');
     if ($window.width() < 768 && !$("#mobile-menu").hasClass("mobile-menu-present")) {
         return $html.wrapAll("<div id='mobile-menu' class='mobile-menu-present'></div>");
     } else {}

 }

 //Functions
 function FixMenuOnScrollSticky() {
     $(window).scroll(function () {
         if ($(window).scrollTop() > 650 && $(window).width() > 768) {
             $(".main-menu").css("position", 'fixed');
             $(".main-menu").css("background", 'rgba(0, 0, 0, 0.7)');
             $("#slicknav").css("position", 'fixed');
             $(".main-menu").css("margin-right", "-3000px");
             $(".main-menu").css("padding-right", "3000px");
             $(".main-menu").css("margin-left", "-3000px");
             $(".main-menu").css("padding-left", "3000px");
             $(".main-menu").css("padding-bottom", "20px");
         } else if ($(window).scrollTop() > 650 && $(window).width() < 768) {
             $(".main-menu").css("position", 'fixed');
             $(".main-menu").css("background", 'rgba(0, 0, 0, 0.7)');
             $("#slicknav").css("position", 'fixed');
             $(".main-menu").css("margin-right", "-3000px");
             $(".main-menu").css("padding-right", "3000px");
             $(".main-menu").css("margin-left", "-3000px");
             $(".main-menu").css("padding-left", "3000px");
         } else {
             $(".main-menu").css("position", 'relative');
             $(".main-menu").css("background", 'none');
             $("#slicknav").css("position", 'absolute');
         }
     });
 }

 function ToggleSlickNav() {
     $('#slicknav').click(function () {
         $(this).toggleClass('open');
         $("#mobile-menu").slideToggle("slow");
         if ($(window).scrollTop() < 700) {
             $(".main-menu").toggleClass('openMenu').fadeIn("slow");
         };
     });
 }

 function UnwrapAll() {
     if ($(window).width() > 768 && $("#mobile-menu").hasClass("mobile-menu-present")) {
         $("#mobile-menu").contents().unwrap();
     }
 }



 function SmoothScroll() {
     $('a').click(function () {
         $('html, body').animate({
             scrollTop: $($(this).attr('href')).offset().top
         }, 500);
         return false;
     });
 }
