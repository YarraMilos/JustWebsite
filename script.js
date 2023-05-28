
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    breakpoints: {
      788: {
        slidesPerView: 2,
      },
      1160: {
        slidesPerView: 3,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(i, classname) {
        return '<span class ="' + classname + '">' + (i + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
const spoilerButtons = document.querySelectorAll("[data-name='spoiler-button']");
if (spoilerButtons.length > 0) {
  spoilerButtons.forEach(element => {
    element.addEventListener('click', function(e) {
      element.nextElementSibling.classList.toggle('content__spoiler')
      element.classList.toggle('active')
    })
  });
}

const sliderImages = document.querySelectorAll("[data-name='slider__img']")
const popup = document.querySelector("#popup")
const body = document.querySelector('body')
const closePopup = document.querySelector('.close__popup')
if (sliderImages.length > 0) {
    sliderImages.forEach(elem => {
        elem.addEventListener('click' ,function(e) {
            const clickedImg = elem.cloneNode(1);
            body.classList.add('noscroll') 
            popup.classList.add('active')
            popup.appendChild(clickedImg);
            closePopup.addEventListener('click', function() {
                body.classList.remove('noscroll')
                popup.classList.remove('active')
                clickedImg.remove()
            })
        })
    })
}





