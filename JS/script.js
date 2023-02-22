/* 
   Author: Amegavi Francis
   Created: December 2020
   Description: Custom JS file
*/
(function($){
    "strict"
    
//    jQuery(document).ready(function () {
         
        // == AOS Init== //
        AOS.init({
            disable: 'mobile'
        });
        
	//Navbar script -  jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 10) {
			$(".fixed-top").addClass("top-nav-collapse");
            

		} else {
			$(".fixed-top").removeClass("top-nav-collapse");

		}
    });
    
    //Js morphext transformation
    $("#js-rotating").Morphext({
        animation: "BounceIn",
        separator: ",",
        speed: 2000,
        complete: function () {
            
        }
    });
    
//    });
    
})(jQuery);