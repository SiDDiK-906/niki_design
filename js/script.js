// venobox
$('.venobox').venobox(); 
// ====================================================
// 		    Service Plugin Start
// ====================================================
$('.plugin_slider').slick({
    dots: false,
	arrows: true,
    autoplay: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<i class="fa fa-angle-up up_arrow" aria-hidden="true"></i>',
	nextArrow: '<i class="fa fa-angle-down bottom_arrow" aria-hidden="true"></i>',
	responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
    		centerMode: false,
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
    		centerMode: false,
		  }
		}
	  ]
});
// ====================================================
// 		    Brand Plugin Start
// ====================================================
$('.brand_plugin').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
	centerPadding: 0,
	responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: false
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
});