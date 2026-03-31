(function ($) {
    "use strict";
    gsap.registerPlugin(ScrollTrigger);
    emailjs.init(Y4eIMd5firTIn-mib);

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    //GSAP ANIMATION
    gsap.to(".loader-text", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.out"
});

gsap.to("#preloader", {
  opacity: 0,
  delay: 2.5,
  duration: 1,
  onComplete: () => {
    document.getElementById("preloader").style.display = "none";
  }
});

//
gsap.from(".carousel-caption h1", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".carousel-caption h3", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  stagger: 0.2
});

//
gsap.to(".carousel-item img", {
  scale: 1.1,
  scrollTrigger: {
    trigger: "#home",
    scrub: true
  }
});

//
gsap.utils.toArray("#about .row").forEach((section, i) => {
  const text = section.querySelector(".bg-secondary");
  const img = section.querySelector("img");

  gsap.from(text, {
    x: i % 2 === 0 ? -100 : 100,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });

  gsap.from(img, {
    x: i % 2 === 0 ? 100 : -100,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});

//
gsap.utils.toArray(".timeline .row").forEach((el) => {
  gsap.from(el, {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    }
  });
});

//
gsap.from(".gallery-item", {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#gallery",
    start: "top 80%"
  }
});

//
gsap.from("#rsvp form", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#rsvp",
    start: "top 80%"
  }
});

//
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    gsap.to(window, {
      duration: 1.2,
      scrollTo: target.offsetTop - 70,
      ease: "power3.inOut"
    });
  });
});

//
gsap.to(".navbar", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "body",
    start: "top -50",
    end: "top -200",
    scrub: true
  }
});

//
gsap.to(".carousel-caption", {
  y: -50,
  scrollTrigger: {
    trigger: "#home",
    scrub: true
  }
});

//
gsap.utils.toArray("#about .row").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1.2,
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
    }
  });
});

//
document.querySelectorAll(".reveal-text").forEach(el => {
  const spans = el.innerText.split("").map(char => `<span>${char}</span>`).join("");
  el.innerHTML = spans;

  gsap.to(el.querySelectorAll("span"), {
    y: 0,
    stagger: 0.02,
    duration: 0.5,
    scrollTrigger: {
      trigger: el,
      start: "top 90%"
    }
  });
});

//
gsap.utils.toArray(".gallery-item").forEach((item, i) => {
  gsap.to(item, {
    y: i % 2 === 0 ? -50 : 50,
    scrollTrigger: {
      trigger: item,
      scrub: true
    }
  });
});

//
document.querySelectorAll("input, textarea").forEach(el => {
  el.addEventListener("focus", () => {
    gsap.to(el, { scale: 1.03, duration: 0.2 });
  });

  el.addEventListener("blur", () => {
    gsap.to(el, { scale: 1, duration: 0.2 });
  });
});

//
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

// Try autoplay on page load (may fail silently)
window.addEventListener("load", () => {
  music.play().catch(() => {
    console.log("Autoplay blocked");
  });
});

// Force play on first user interaction
const startMusic = () => {
  music.play();
  btn.innerText = "🔊";
  btn.classList.add("playing");

  document.removeEventListener("click", startMusic);
  document.removeEventListener("scroll", startMusic);
};

document.addEventListener("click", startMusic);
document.addEventListener("scroll", startMusic);

music.volume = 0;

const fadeIn = setInterval(() => {
  if (music.volume < 1) {
    music.volume += 0.05;
  } else {
    clearInterval(fadeIn);
  }
}, 200);

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.innerText = "🔊";
    btn.style.background = "#28a745"; // active state
  } else {
    music.pause();
    btn.innerText = "🎵";
    btn.style.background = "#d4af37"; // idle
  }
});

gsap.to("#preloader", {
  opacity: 0,
  delay: 2.5,
  duration: 1,
  onComplete: () => {
    document.getElementById("preloader").style.display = "none";
    
    // Start music here
    music.play().catch(() => {});
  }
});

btn.classList.toggle("playing");

//
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.getAttribute("data-copy");

    navigator.clipboard.writeText(text).then(() => {
      
      // Add animation class
      btn.classList.add("copied");
      btn.innerHTML = '<i class="fa fa-check"></i>';

      // Reset after 2 seconds
      setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerHTML = '<i class="fa fa-copy"></i>';
      }, 2000);

    });
    const toast = document.getElementById("toast");
        toast.classList.add("show");

        setTimeout(() => {
        toast.classList.remove("show");
        }, 2000);
  });
});

//
gsap.from(".story-text", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%"
  }
});

//
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.padding = "10px 0";
    navbar.style.background = "rgba(128, 0, 32, 0.98)";
  } else {
    navbar.style.padding = "20px 0";
    navbar.style.background = "rgba(128, 0, 32, 0.95)";
  }
});

//
document.getElementById("rsvp-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    service_1jce2wk,
    template_3e5gyve,
    this
  ).then(() => {
    document.querySelector("#success-message").classList.add("show");
    this.reset();
  }, (error) => {
    alert("Failed to send. Try again.");
    console.log(error);
  });
});

    
})(jQuery);

