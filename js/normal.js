// Toggle responsive navbar
window.addEventListener('scroll', function() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 1200) {
        // Apply mobile styles
        document.getElementById("mobile").classList.add("d-flex")
        document.getElementById("desktop").classList.add("d-none")
      }
    else if (window.scrollY === 0) {
        document.getElementById("mobile").classList.add("d-flex")
        document.getElementById("mobile").classList.remove("d-none")
        document.getElementById("desktop").classList.add("d-none")
        document.getElementById("desktop").classList.remove("d-flex")
    }
    else if(viewportWidth > 1200 || window.scrollY !== 0){
        document.getElementById("mobile").classList.add("d-none")
        document.getElementById("mobile").classList.remove("d-flex")
        document.getElementById("desktop").classList.add("d-flex")
        document.getElementById("desktop").classList.remove("d-none")
    }
});

const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links")[1];
const menu1 = document.querySelector(".menu1");
console.log(navLinks)
burger.addEventListener("click", () => {
  navLinks.classList.toggle("d-none");
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("change");
});

const slider = document.querySelectorAll(".slides");
Array.from(slider).forEach((e,i)=>{
    const sliderBtn = slider[i].querySelectorAll(".slider-btn");
        Array.from(sliderBtn).forEach((element, i)=>{
            element.addEventListener('click',()=>{
                hideall();
                slider[i].classList.add("active")
            })
            function hideall(){
                Array.from(slider).forEach((element)=>{
                    element.classList.remove("active")
                })
            }
        })

    })

    var slides = document.querySelectorAll('.slides');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');

    // Calculate the translateX value for the slider container
    var translateValue = -currentSlide * slides[0].offsetWidth;
    
    // Apply the transform style to move the slider smoothly
    var slider = document.querySelector('.slides');
    slider.style.transform = 'translateX(' + translateValue + 'px)';
    }

    
  const owlItem = document.getElementsByClassName(".owl-item")
  Array.from(owlItem).forEach((element)=>{
    element.style.width = "200px"
  })