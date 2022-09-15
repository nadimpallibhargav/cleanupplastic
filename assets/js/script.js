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
