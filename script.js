document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const hiddenSection = document.querySelector(".hidden-clients");

  showMoreBtn.addEventListener("click", function () {
    hiddenSection.style.display = "flex";
    showMoreBtn.style.display = "none";
  });
});





// Enable smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: false,
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonialSwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    spaceBetween: 30,
    speed: 800,
    slidesPerGroup: 3, // ✅ Move 3 at a time
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1, // ✅ On mobile, move 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2, // ✅ On tablet, move 2
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3, // ✅ On desktop, move 3
      }
    }
  });
});


// Gallery Section Swipers
const gallerySwiperClasses = [
  'gallery-swiper-1',
  'gallery-swiper-2',
  'gallery-swiper-3',
  'gallery-swiper-4',
  'gallery-swiper-5',
  'gallery-swiper-6',
  'gallery-swiper-7',
  'gallery-swiper-8',
  'gallery-swiper-9',
  'gallery-swiper-10',
  'gallery-swiper-11',
  'gallery-swiper-12'
];

gallerySwiperClasses.forEach(className => {
  new Swiper(`.${className}`, {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: `.${className} .swiper-pagination`,
      clickable: true,
    },
  });
});



























