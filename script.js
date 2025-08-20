const previewImage = document.getElementById('previewImage');
const sliderAudio = document.getElementById('sliderAudio');

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false
  },
  on: {
    init: function () {
      updatePreview(this.realIndex);
      sliderAudio.play();
    },
    slideChange: function () {
      updatePreview(this.realIndex);
    },
    autoplayStart: function () {
      sliderAudio.play();
    },
    autoplayStop: function () {
      sliderAudio.pause();
    }
  }
});

function updatePreview(index) {
  const slides = document.querySelectorAll('.swiper-slide img');
  previewImage.src = slides[index].src;
}
