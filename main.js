/*abre e fecha menu x*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* 	quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

//SWIPER

var swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true
  }
})

/*scrollreveal*/
const scrollReveal = ScrollReveal({ 
  origin: 'top', 
  distance: '30px', 
  duration: 700, 
  reset: false 
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services .title, #services .card,
  #updates .header, #updates .swiper,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
 { interval: 100})



window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()

})
