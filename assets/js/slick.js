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
      autoplaySpeed: 3500,
      asNavFor: ".product__slider-thmb",
      arrows: true,
      pauseOnHover: false,
    });

  var $slider2 = $(".product__slider-thmb")
    .on("init", function (slick) {
      $(".product__slider-thmb").fadeIn(1000);
    })
    .slick({
      slidesToShow: 5,
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

// Differentiator Slider

if ($(".differentiator-slider-main").length) {
  var $slider = $(".differentiator-slider-main")
    .on("init", function (slick) {
      $(".differentiator-slider-main").fadeIn(1000);
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      lazyLoad: "ondemand",
      autoplaySpeed: 3000,
      vertical: true,
      fade: true,
      pauseOnHover: false,
      asNavFor: ".differentiator-slider-thmb",
    });

  var $slider2 = $(".differentiator-slider-thmb")
    .on("init", function (slick) {
      $(".differentiator-slider-thmb").fadeIn(1000);
    })
    .slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      asNavFor: ".differentiator-slider-main",
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      vertical: true,
    });

  //remove active class from all thumbnail slides
  $(".differentiator-slider-thmb .slick-slide").removeClass("slick-active");

  //set active class to first thumbnail slides
  $(".differentiator-slider-thmb .slick-slide").eq(0).addClass("slick-active");

  // On before slide change match active thumbnail to current slide
  $(".differentiator-slider-main").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $(".differentiator-slider-thmb .slick-slide").removeClass("slick-active");
      $(".differentiator-slider-thmb .slick-slide").removeClass(
        "slick-active1"
      );
      $(".differentiator-slider-thmb .slick-slide")
        .eq(mySlideNumber)
        .addClass("slick-active");
      $(".differentiator-slider-thmb .slick-slide")
        .eq(mySlideNumber)
        .addClass("slick-active1");
    }
  );
  function dthumbClick(obj) {
    $(".differentiator-slider-thmb .slick-slide").removeClass("slick-active1");
    $(obj).addClass("slick-active1");
  }
  if ($(".differentiator-slider-thmb .slick-slide").hasClass("slick-current")) {
    $(".differentiator-slider-thmb .slick-current").addClass("slick-active1");
  } else {
    $(".differentiator-slider-thmb .slick-current").removeClass(
      "slick-active1"
    );
  }
}
