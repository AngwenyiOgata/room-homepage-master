(function () {
  'use strict';

  const myImages = ['desktop-image-hero-1.jpg', 'desktop-image-hero-2.jpg', 'desktop-image-hero-3.jpg']
  const nextBtn = document.querySelector('.arrow-right');
  const prevBtn = document.querySelector('.arrow-left');
  const sliderImage = document.querySelector('.app__main-slider-image img');
  let counter = 0;

  const heading = document.querySelector('.app__main-slider-heading');
  const textBody = document.querySelector('.app__main-slider-desc');

  const OtherHeds = ['Discover innovative <br> ways to decorate','We are available <br> all across the globe', 'Manufactured with <br> the best materials'];
  const text = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",

    "With stores all over the world, it's easy for you to find furniture for your home or place of business.    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our    store locator. Any questions? Don't hesitate to contact us today.",

    'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as erfect nd as consistent as possible. With three decades of    experience in this industry, we understand what customers want for their home and office.'
  ]


  nextBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    counter++;

    if (counter === myImages.length ) {
      counter = 0;
    }
    sliderImage.src= `./images/${myImages[counter]}`;
    heading.innerHTML = OtherHeds[counter];
    textBody.innerHTML = text[counter];
  });

  prevBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if (counter == 0 ) {
      counter = 3;
    }
    counter--;
    sliderImage.src= `./images/${myImages[counter]}`;
    heading.innerHTML = OtherHeds[counter];
    textBody.innerHTML = text[counter];
  });

  const hamburger = document.querySelector('.hamburger');
  const navBar = document.querySelector('.app__header-ul')

  hamburger.addEventListener('click', (evt)=>{
    evt.preventDefault();
    navBar.classList.toggle('active');
    if (navBar.classList.contains('active')) {
      hamburger.src = './images/icon-close.svg';
    }
    else{
      hamburger.src = './images/icon-hamburger.svg';
    }
  })

}());