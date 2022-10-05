if ($(".association-slider").length) {
  var $newslider = $(".association-slider")
    .on("init", function (slick) {
      $(".association-slider").fadeIn(1000);
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyLoad: "ondemand",
      autoplaySpeed: 3500,
      asNavFor: ".product__slider-thmb",
      pauseOnHover: false,
    });
}

if ($(".product__slider-main").length) {
  var $slider = $(".product__slider-main")
    .on("init", function (slick) {
      $(".product__slider-main").fadeIn(1000);
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyLoad: "ondemand",
      autoplaySpeed: 5500,
      asNavFor: ".product__slider-thmb",
      arrows: true,
      pauseOnHover: false,
    });

  var $slider2 = $(".product__slider-thmb")
    .on("init", function (slick) {
      $(".product__slider-thmb").fadeIn(1000);
    })
    .slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      asNavFor: ".product__slider-main",
      autoplay: true,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: false,
    });

  //remove active class from all thumbnail slides
  $(".product__slider-thmb .slick-slide").removeClass("slick-active");

  //set active class to first thumbnail slides
  $(".product__slider-thmb .slick-slide").eq(0).addClass("slick-active");

  // On before slide change match active thumbnail to current slide
  $(".product__slider-main").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $(".product__slider-thmb .slick-slide").removeClass("slick-active");
      $(".product__slider-thmb .slick-slide").removeClass("slick-active1");
      $(".product__slider-thmb .slick-slide")
        .eq(mySlideNumber)
        .addClass("slick-active");
      $(".product__slider-thmb .slick-slide")
        .eq(mySlideNumber)
        .addClass("slick-active1");
    }
  );

  function thumbClick(obj) {
    $(".product__slider-thmb .slick-slide").removeClass("slick-active1");
    $(obj).addClass("slick-active1");
  }
  if ($(".product__slider-thmb .slick-slide").hasClass("slick-current")) {
    $(".product__slider-thmb .slick-current").addClass("slick-active1");
  } else {
    $(".product__slider-thmb .slick-current").removeClass("slick-active1");
  }
}
