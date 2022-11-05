// parallax............

// const parallax = document.getElementById
//   ("parallax");

// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = (offset)
//     * -.7 + "px"
// })

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  let parallaxDiv = document.getElementById('parallax');
  var distanceToTop = parallaxDiv.getBoundingClientRect().top;


  parallax.style.backgroundPositionY = (distanceToTop)* .4 +"px";
  console.log(distanceToTop)
})

// Animation............

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // if (entry.isIntersecting) {
    //   entry.target.classList.add('show');
    // }
    // else {
    //   entry.target.classList.remove('show');
    // }


    if (entry.isIntersecting) {
      entry.target.classList.add('Dshow');
    }
    else {
      entry.target.classList.remove('Dshow');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const tastElements = document.querySelectorAll('.tast');
tastElements.forEach((el) => observer.observe(el));

const slideupElements = document.querySelectorAll('.slideup');
slideupElements.forEach((el) => observer.observe(el));

// var scrollTop  = $(window).scrollTop();




window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  let parallaxDiv = document.getElementById('parallaxTwo');
  var distanceToTop = parallaxDiv.getBoundingClientRect().top;


  parallaxTwo.style.backgroundPositionY = (distanceToTop)*.3+"px";
  console.log(distanceToTop)
})


window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  let parallaxDiv = document.getElementById('parallaxThree');
  var distanceToTop = parallaxDiv.getBoundingClientRect().top;


  parallaxThree.style.backgroundPositionY = (distanceToTop)*.3+"px";
  console.log(distanceToTop)
})


window.addEventListener("scroll", function () {
  let offset = window.pageXOffset;
  let parallaxDiv = document.getElementById('slide');
  var w = parallaxDiv.getBoundingClientRect().top;
  // var w = (window).scrollTop();
  
  slide.style.webkitTransform += "translate(5px ,0)";

  console.log(w);
})




// (window).scroll(function(){
//   var w = parallaxDiv.getBoundingClientRect().top;
//   var f = "translateX(" + w*3.75 + "px) translateY(" + w*.75 + "px)";
//   ('.CroissantSide').css({
//     transform: f
//   })


//   ('.CroissantSide').find('p').text("3. " + f);  
         
// });