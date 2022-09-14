window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").classList.add("sticky");
  } else {
    document.getElementById("header").classList.remove("sticky");
  }
}

$(".tabs li").on("click", function () {
  var dataSolution = $(this).attr("data-solution");

  $(".tabs li").removeClass("active");
  $(this).addClass("active");

  $(".panel").removeClass("active");

  $("." + dataSolution).addClass("active");

});

// Modal Functionality
function modalOpen(obj) {
  $("body").addClass("modal-show");
  $(".modal").addClass("modal-open");
  let o = $(obj).attr("data-src");
  $("#video").attr(
    "src",
    o +
      "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=0&amp;wmode=transparent&amp;mode=opaque&amp;controls=1;"
  );
}

function hideModal(obj) {
  $("body").removeClass("modal-show");
  $(obj).closest(".modal").removeClass("modal-open");
  $(obj).closest(".modal").find("#video").attr("src", "");
}
// Faq Functionality
function showFaq(obj) {
  let faq_tab = $(obj).closest(".faq_tab");
  $(".closeimage").css("display", "none");
  $(".plusimage").css("display", "flex");
  $(".faq_header .title").removeClass("active");
  if ($(faq_tab).find(".faq_body").hasClass("show-faq")) {
    $(faq_tab).find(".faq_body").removeClass("show-faq");
  } else {
    $(".faq_body").removeClass("show-faq");
    $(faq_tab).find(".faq_body").addClass("show-faq");
    $(obj).find(".plusimage").css("display", "none");
    $(obj).find(".closeimage").css("display", "flex");
    $(obj).find(".title").addClass("active");
  }
}
// Differentiator Tabs Change
function changeTab(obj) {
  $(".differentiators_tab").removeClass("active");
  $(obj).addClass("active");
  let tabId = $(obj).attr("data-tab-id");
  $(".differentiators_imagewrapper img").removeClass("active");
  $("#" + tabId).addClass("active");
  console.log(tabId);
}

// Testimonial Tabs Functionality

function changeTestimonial(obj) {
  $("a.tab").removeClass("active");
  $(".panel").removeClass("active");
  $(obj).addClass("active");
  let panelId = $(obj).attr("data-testimonial-id");
  $("#" + panelId).addClass("active");
}

// Sticky Header Effect
window.onscroll = () => {
  let timeout = setTimeout(() => {
    if (window.scrollY > 50) {
      document.getElementById("header").classList.add("sticky");
    } else {
      document.getElementById("header").classList.remove("sticky");
    }
    if (window.scrollY > 51) {
      document.getElementById("header").classList.add("transform");
    } else {
      document.getElementById("header").classList.remove("transform");
    }
  }, 10);
};

// Scroll To Section


function scrollToSmoothly(obj, time) {
  window.event.preventDefault();
  $(".nav_toggle").removeClass("active");
  $(".header_links").removeClass("active");
  let el = $(obj).attr("href");
  const targetAnchor = document.querySelector(el);
  let pos = targetAnchor.offsetTop;
  var currentPos = window.pageYOffset;
  var start = null;
  if (time == null) time = 800;
  (pos = +pos), (time = +time);
  let interval = 100;
  if (window.innerWidth < 769) {
    interval = 420;
  }
  setTimeout(() => {
    window.requestAnimationFrame(function step(currentTime) {
      start = !start ? currentTime : start;
      var progress = currentTime - start;
      if (currentPos < pos) {
        window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
      } else {
        window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
      }
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    });
  }, interval);
}
